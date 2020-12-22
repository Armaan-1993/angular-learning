import { Component, OnInit } from '@angular/core';
import { List } from './../list';
import { arrayList } from './../../mock-list';

@Component({
  selector: 'app-add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.css']
})
export class AddToListComponent implements OnInit {

  constructor() { }


  list = arrayList;
  selectedList: List;
  ngOnInit(): void {
  }

}
