import { Component, OnInit } from '@angular/core';
import { arrayList } from './../../mock-list';
import { List } from './../list';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  constructor() { }

  LISTS = arrayList;
  selectedList: List;

  ngOnInit(): void {
  }

  onSelect(list: List) {
    this.selectedList = list;
  }


}
