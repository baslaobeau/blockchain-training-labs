import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent implements OnInit {

  currentBlockInfo: object;
  constructor(private data1: DataService) { }

  ngOnInit() {
    this.data1.getBlockView().subscribe(
      data => this.currentBlockInfo = data
    );

  }

}
