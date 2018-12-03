import { Component, OnInit } from '@angular/core';
import {Car} from '../car';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  car = new Car('CAR102', 'Toyota', 'Yaris', 'White', 'John');


  onSubmit() {
    console.log('submitting');
    this.data.createCar(this.car).subscribe((result) => {
      console.log('result:' + result);
      this.router.navigate(['']);
  });
  }

  ngOnInit() {
  }

}
