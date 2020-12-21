import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToListComponent } from './add-to-list/add-to-list.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListContainerItemComponent } from './list-container-item/list-container-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddToListComponent,
    ListContainerComponent,
    ListContainerItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
