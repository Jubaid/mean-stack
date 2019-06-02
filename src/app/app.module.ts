import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PostCreateComponenet} from './posts/post-create/post-create.component'

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponenet
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
