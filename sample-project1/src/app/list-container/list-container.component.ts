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
 set  inputData (val) {
   this.inputDataValue = val;
  //  console.log(`This is the inputDataValue ${this.inputDataValue}`) 
 }

  ngOnInit(): void {
  }
  

}
