import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCars() {

    return this.http.get('http://localhost:3000');
  }

  getUser() {

    return this.http.get('http://localhost:3000/?attr=username');
  }

  getBlockView() {

    return this.http.get('http://localhost:3000/block');
  }


  createCar(car: Car): Observable<string> {
    console.log('called:' + car.Key);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })};

      let body = new HttpParams();
      body = body.set('carid', car.Key);
      body = body.set('make', car.make);
      body = body.set('model', car.model);
      body = body.set('color', car.colour);
      body = body.set('owner', car.owner);
      return this.http.post('http://localhost:3000/car', body, httpOptions)
                   .pipe(map(res => {
                     return this.extractData(res);
                   }));
  }

  changeOwner(key: string, owner: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })};

      let body = new HttpParams();
      body = body.set('carid', key);
      body = body.set('owner', owner);
      return this.http.put('http://localhost:3000/car', body, httpOptions)
                   .pipe(map(res => {
                     return this.extractData(res);
                   }));
  }

  getCarsbyOwner(owner: string){

      return this.http.get('http://localhost:3000?owner='+owner);
       
  }

  getCarHistory(car: string){

    return this.http.get('http://localhost:3000?car='+car);
     
  }


  changeColour(key: string, colour: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })};

      let body = new HttpParams();
      body = body.set('carid', key);
      body = body.set('color', colour);
      return this.http.put('http://localhost:3000/car', body, httpOptions)
                   .pipe(map(res => {
                     return this.extractData(res);
                   }));
  }

  private extractData(res: any) {
    console.log('RESD::: ', res);
    const body = res.text;
          return body || {};
      }

}
