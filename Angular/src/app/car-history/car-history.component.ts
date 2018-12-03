import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-car-history',
  templateUrl: './car-history.component.html',
  styleUrls: ['./car-history.component.scss']
})
export class CarHistoryComponent implements OnInit {

  carHistory$: object;
  car: string;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onSubmit(userForm: NgForm) {
    console.log('car:' + this.car);

    this.data.getCarHistory(this.car).subscribe(
      data => this.carHistory$ = data
    );

  }


}
