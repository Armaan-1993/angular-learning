import { Component, OnInit} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { arrayList } from './../../mock-list';
import { ComponentService } from './../component.service';
import { List } from './../list';

@Component({
  selector: 'app-add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.css']
})
export class AddToListComponent implements OnInit {

  constructor(private componentService: ComponentService) { }

  Item: List;    
  // LISTS = arrayList;
  // selectedList: List;
  
  // inputToChild:any = {id: Date.now() ,name: ""};
  formInput: List;

  onSelect() {
    console.log(this.formInput);
    this.componentService.addItems(this.formInput);
    // console.log(`The  inputotchild is ${this.inputToChild} and the form input is ${this.formInput}`)
  }
  ngOnInit(): void {
  }
}
