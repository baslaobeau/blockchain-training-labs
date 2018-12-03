import { Component, OnInit } from '@angular/core';
import {Car} from '../car';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-owner',
  templateUrl: './change-owner.component.html',
  styleUrls: ['./change-owner.component.scss']
})
export class ChangeOwnerComponent implements OnInit {
  cars$: object;
  key: string;
  new_owner: string;
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
    console.log('new_owner:' + this.new_owner);
    this.data.changeOwner(this.key, this.new_owner).subscribe((result) => {
      console.log('result:' + result);
      this.router.navigate(['']);
  });

}

}
