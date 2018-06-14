import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FarmsMarketModuleModule } from './farms-market-module/farms-market-module.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    /*FarmsMarketModuleModule,*/
    RouterModule.forRoot([
      { path: 'farmsMarket', 
        loadChildren: './farms-market-module/farms-market-module.module#FarmsMarketModuleModule'}
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
