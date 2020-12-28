import { Component, OnInit} from '@angular/core';
import { List } from './../list';
import { arrayList } from './../../mock-list';

@Component({
  selector: 'app-add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.css']
})
export class AddToListComponent implements OnInit {

  constructor() { }
  LISTS = arrayList;
  selectedList: List;
  
  inputToChild:any = {id: Date.now() ,name: ""};
  formInput: any;

  onSelect() {
    this.inputToChild = {id : this.LISTS.length+1,name: this.formInput}
    // console.log(`The  inputotchild is ${this.inputToChild} and the form input is ${this.formInput}`)
  }

  ngOnInit(): void {
  }


}
