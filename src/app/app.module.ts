import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { OtherComponent } from './components/other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
