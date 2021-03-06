import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToListComponent } from './add-to-list/add-to-list.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListContainerItemComponent } from './list-container-item/list-container-item.component';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from "@angular/fire"
import {environment} from "../environments/environment"
import {AngularFirestoreModule} from "@angular/fire/firestore"
import { ComponentService } from './component.service';

@NgModule({
  declarations: [
    AppComponent,
    AddToListComponent,
    ListContainerComponent,
    ListContainerItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase ,"angularfs"),
    AngularFirestoreModule,
    
  ],
  providers: [ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
