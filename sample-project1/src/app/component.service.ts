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
    this.items = this.afs.collection("items" , ref => ref.orderBy("created",  "desc")).
    valueChanges();
  }
   getItems() {
     return this.items;
   }
   addItems(myval) {
    this.afs.collection("items").add({ name }).then((ref) => ref.update({ id: ref.id,name:myval, created: new Date() }));
   }
   deleteMyitems(myval) {
    this.afs.collection("items").doc(myval).delete();
   }
   updateItems (payload: { id: string, name: string}) {
     console.log(`the payload is ${payload}`)
     this.afs.collection("items").doc(payload.id).update(payload);
   }
}



