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
  inputDataValue: any = this.LISTS;

  @Input() 
 set  inputData (val) {
   console.log(val)
   if(val.name !== "") {
    this.inputDataValue.push(val);
   }
 
   
  //  console.log(`This is the inputDataValue ${this.inputDataValue}`) 
 }

  ngOnInit(): void {
  }
  

}
