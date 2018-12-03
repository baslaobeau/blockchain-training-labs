import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-search-by-owner',
  templateUrl: './search-by-owner.component.html',
  styleUrls: ['./search-by-owner.component.scss']
})
export class SearchByOwnerComponent implements OnInit {
  
  cars$: object;
  owner: string;
  constructor(private data: DataService) { }
  ngOnInit() {
  }

  onSubmit(userForm: NgForm) {
    console.log('owner:' + this.owner);

    this.data.getCarsbyOwner(this.owner).subscribe(
      data => this.cars$ = data
    );

  }

}



