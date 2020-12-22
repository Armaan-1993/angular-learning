import { Component, OnInit ,Input } from '@angular/core';
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
  inputDataValue: any;

  @Input() 
  set inputData (val) {
    console.log(val);
    this.inputDataValue = val;
  }

  ngOnInit(): void {
  }
  

}
