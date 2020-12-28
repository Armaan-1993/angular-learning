import { arrayList } from './../../mock-list';
import { List } from './../list';
import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';
import { style } from '@angular/animations';


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
   @Output() myOutput: EventEmitter <number> = new EventEmitter();

   deleteItem (val) {
    this.myOutput.emit(val);
   }

   isVisible: boolean= false;
   buttonVisible: boolean= true;
   updatedInput: any;

   openDiv(value) {
     this.isVisible = true;
     this.buttonVisible = false;
    //  const newObject = {id: Date.now(),name: updateObject}
   }
   closeDiv() {
     this.isVisible = false;
     this.buttonVisible = true;
   }
  
    ngOnInit(): void { 
  }

}
