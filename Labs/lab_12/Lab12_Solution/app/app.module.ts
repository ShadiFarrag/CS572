import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyDirective1Directive } from './directive1.directive';
import { ArrayCompComponent } from './array-comp.component';
import { UpperDirectiveDirective } from './upper-directive.directive';
import { MyVisibilityDirective } from './my-visibility.directive';
import { MycolorDirective } from './mycolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyDirective1Directive,
    ArrayCompComponent,
    UpperDirectiveDirective,
    MyVisibilityDirective,
    MycolorDirective,
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
