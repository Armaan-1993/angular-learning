import { arrayList } from './../../mock-list';
import { List } from './../list';
import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-list-container-item',
  templateUrl: './list-container-item.component.html',
  styleUrls: ['./list-container-item.component.css']
})
export class ListContainerItemComponent implements OnInit {

  constructor() { }

  LISTS = arrayList;
  @Input() 
  set  inputToSecondChild(val) {
    this.LISTS.push({
      id: this.LISTS.length + 1,
      name: val
    })
    console.log(`The inputtosecondchild is ${val}`)
  }

  // onDelete () {
  //   if(this.LISTS.length  > 0) {
  //   this.LISTS[this.LISTS.length - 1].id === 
  //   }
  // }
    ngOnInit(): void {
  }

}
