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
  
  inputToChild:any;
  formInput: any;

  LISTS = arrayList;
  selectedList: List;

  onSelect() {
    this.inputToChild = this.formInput;
    // console.log(`The  inputotchild is ${this.inputToChild} and the form input is ${this.formInput}`)
}

  ngOnInit(): void {
  }


}
