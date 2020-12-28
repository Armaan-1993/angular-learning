import { Component, OnInit ,Input, Output } from '@angular/core';
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
  inputDataValue: any = this.LISTS;

  @Input() 
 set  inputData (val) {
   console.log(val)
   if(val.name !== "") {
    this.inputDataValue.push(val);
   }
 }
  firstChildOutput (myval) {
  console.log(`myval is ${myval}`);
  console.log(this.inputDataValue);
  this.inputDataValue = this.inputDataValue.filter(item=>item.id!==myval)
 }

  ngOnInit(): void {
  }
}
