import { Injectable } from '@angular/core';
import {AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore"
import {List} from "../app/list"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  itemsCollection: AngularFirestoreCollection<List>
  items: Observable<List[]>;
  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection("items").valueChanges();
    //valueChanges() retuens the data from firestore as an observable
   }
   getItems() {
     return this.items;
   }
}



