import { arrayList } from './../../mock-list';
import { List } from './../list';
import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-container-item',
  templateUrl: './list-container-item.component.html',
  styleUrls: ['./list-container-item.component.css']
})
export class ListContainerItemComponent implements OnInit {

  constructor() { }

  inputValue : any = {id: "", name: ""}

  LISTS = arrayList;
  @Input() 
  set  inputToChild(val) {
    console.log(`child component ${val}`);
    if(val) {
      this.inputValue = val;
    }
  }
   @Output() secondChildOutput: EventEmitter <number> = new EventEmitter();

   deleteItem (val) {
    this.secondChildOutput.emit(val);
   }


  // onDelete () {
  //   if(this.LISTS.length  > 0) {
  //   this.LISTS[this.LISTS.length - 1].id === 
  //   }
  // }

    ngOnInit(): void {
  }

}
