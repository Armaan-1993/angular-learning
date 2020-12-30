import { Component, OnInit ,Input} from '@angular/core';
import { arrayList } from './../../mock-list';
import { ComponentService } from './../component.service';
import { List } from './../list';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {



  LISTS = arrayList;
  inputDataValue: any[] = this.LISTS;


  constructor(private componentService: ComponentService) { }

  itemsFromFs: List[];

  @Input() 
 set  inputData (val) {
   console.log(val)
   if(val.name !== "") {
    this.itemsFromFs.push(val);
   }
 }
  firstChildOutput (myval) {
  console.log(`myval is ${myval}`);
  console.log(this.inputDataValue);
  this.inputDataValue = this.inputDataValue.filter(item=>item.id!==myval)
 }

  ngOnInit(): void {
    this.componentService.getItems().subscribe(items => {
      // console.log(items);
      this.itemsFromFs = items;
    })
  }
  

}
