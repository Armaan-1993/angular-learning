import { Component, OnInit} from '@angular/core';
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
    if(this.formInput.name !== "" ) {
      this.Item = {id :Date.now(), name: this.formInput.name}
    }
    
    // console.log(`The  inputotchild is ${this.inputToChild} and the form input is ${this.formInput}`)
  }

  ngOnInit(): void {
  }


}
