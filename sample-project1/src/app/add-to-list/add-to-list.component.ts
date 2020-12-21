import { Component, OnInit } from '@angular/core';
import { List } from './../list';

@Component({
  selector: 'app-add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.css']
})
export class AddToListComponent implements OnInit {

  constructor() { }

  list: List = {
    id: 1,
    name: "ARMAAN"
  }
  ngOnInit(): void {
  }

}
