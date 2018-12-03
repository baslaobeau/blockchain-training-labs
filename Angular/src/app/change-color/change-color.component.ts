import { Component, OnInit } from '@angular/core';
import {Car} from '../car';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.scss']
})
export class ChangeColorComponent implements OnInit {
  cars$: object;
  key: string;
  new_colour: string;
  constructor(private data: DataService, private router: Router) { }  
  ngOnInit() {
    this.data.getCars().subscribe(
      data => this.cars$ = data
    );
  }

  public onChange(event): void {
    const newVal = event.target.value;
    console.log(newVal);
  }

  onSubmit(userForm: NgForm) {
    console.log('key:' + this.key);
    console.log('new_colour:' + this.new_colour);
    this.data.changeColour(this.key, this.new_colour).subscribe((result) => {
      console.log('result:' + result);
      this.router.navigate(['']);
  });

}
}
