import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipePipe } from './app/pipes/pipe.pipe';
import { NgObjectPipe } from './app/ng-object.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipePipe,
    NgObjectPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
