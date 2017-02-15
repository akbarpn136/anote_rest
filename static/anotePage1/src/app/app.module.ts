import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MunculiniDirective } from './an-directive/munculini.directive';
import { MunculituDirective } from './an-directive/munculitu.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MunculiniDirective,
    MunculituDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
