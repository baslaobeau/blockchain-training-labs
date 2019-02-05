package main

import (
	"fmt"
	"strconv"

	"reflect"

	"github.com/hyperledger/fabric/core/chaincode/shim"
	pb "github.com/hyperledger/fabric/protos/peer"

	// "encoding/json"
	"encoding/json"
	"testing"

	"github.com/stretchr/testify/assert"
)

var TxIdSeed int = 0

var defaultStub *shim.MockStub

func setupChannel() {
	smartContract := new(SmartContract)
	defaultStub = shim.NewMockStub("DefaultChannelStub", smartContract)
	defaultStub.ChannelID = "defaultchannel"
}

func TestCreateCar_Should_Create_A_Car_When_Car_Does_Not_Exist(t *testing.T) {
	setupChannel()

	carKey := "CAR0"
	var inputCar = Car{Make: "Toyota", Model: "Camrey", Colour: "Red", Owner: "Rahul"}
	createCar(t, defaultStub, carKey, inputCar)
	response := getCarByKey(t, defaultStub, carKey)
	outputCarAsBytes := response.Payload
	fmt.Println("outputCar > ", string(outputCarAsBytes))
	var outputCar Car
	json.Unmarshal(outputCarAsBytes, &outputCar)
	assert.True(t, reflect.DeepEqual(outputCar, inputCar))
}

func getCarByKey(t *testing.T, stub *shim.MockStub, carKey string) pb.Response {
	FUNCTION_NAME := "queryCar"
	key := []byte(carKey)
	response := callInvoke(t, stub, FUNCTION_NAME, key)
	return response
}

func createCar(t *testing.T, stub *shim.MockStub, carKey string, car Car) pb.Response {
	FUNCTION_NAME := "createCarWithJsonInput"
	carAsBytes, _ := json.Marshal(car)
	response := callInvoke(t, stub, FUNCTION_NAME, []byte(carKey), carAsBytes)
	return response
}

func callInvoke(t *testing.T, stub *shim.MockStub, function string, args ...[]byte) pb.Response {
	trnxId := generateTransactionId()
	mockInvokeArgs := [][]byte{[]byte(function)}
	mockInvokeArgs = append(mockInvokeArgs, args...)
	response := stub.MockInvoke(trnxId, mockInvokeArgs)
	if response.Status != shim.OK {
		fmt.Println("Invoke Failed due to error")
		t.FailNow()
	}
	return response
}

func generateTransactionId() string {
	TxIdSeed++
	s := strconv.Itoa(TxIdSeed)
	return s
}
