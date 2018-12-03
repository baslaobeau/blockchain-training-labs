import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cars$: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCars().subscribe(
      data => this.cars$ = data
    );
  }

}
