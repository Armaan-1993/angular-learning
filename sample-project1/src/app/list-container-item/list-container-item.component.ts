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
      id: 10,
      name: val
    })
  }

    ngOnInit(): void {
      console.log(this.inputToSecondChild)
  }

}
