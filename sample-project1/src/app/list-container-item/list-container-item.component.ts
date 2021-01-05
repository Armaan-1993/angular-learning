import { ComponentService } from './../component.service';
import { arrayList } from './../../mock-list';
import { List } from './../list';
import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-container-item',
  templateUrl: './list-container-item.component.html',
  styleUrls: ['./list-container-item.component.css']
})
export class ListContainerItemComponent implements OnInit {

  constructor(private componentService: ComponentService) { }

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

   items: Observable<List[]>;

   deleteItem (val) {
     console.log(val);
    this.myOutput.emit(val);
    this.componentService.deleteMyitems(val);
   }
    
   tempVariable: List = this.inputToChild; 

   isVisible: boolean= false;
   buttonVisible: boolean= true;
   updatedInput: any;

   openDiv() {
     this.isVisible = true;
     this.buttonVisible = false;
  }
   saveFunction(updateValue) {
     this.isVisible = false;
     this.buttonVisible = true;
    //  console.log(updateValue.id ,updateValue.name)
     this.componentService.updateItems(updateValue)
   }
   newValue: List;

   cancelFunction(val) {
    this.isVisible = false;
    this.buttonVisible = true;
    // if (this.componentService.getItems().forEach(value => value === val)){

    // }
    console.log(val.name, val.id); 
  }
  
    ngOnInit(): void { 
  }

}