import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-who-is-me',
  templateUrl: './who-is-me.component.html',
  styleUrls: ['./who-is-me.component.scss']
})
export class WhoIsMeComponent implements OnInit {

  ME: object;
  constructor(private data1: DataService) { }

  ngOnInit() {

    this.data1.getUser().subscribe(
        data => this.ME = data
    );
  }

}
