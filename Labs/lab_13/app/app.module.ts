import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FarmsMarketModuleModule } from './farms-market-module/farms-market-module.module';
import { RouterModule } from '@angular/router';
import { FarmsComponentComponent } from './farms-market-module/farms-component/farms-component.component';
import { FarmDetailsComponent } from './farms-market-module/farm-details/farm-details.component';
import { ErrorComponent } from './farms-market-module/error/error.component';
import {FarmDetailGrdGuard} from "./farms-market-module/farm-detail-grd.guard";


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
      /*{ path: 'farmsMarket', component: FarmsComponentComponent },
      { path: 'farmsMarket', component: FarmsComponentComponent, 
        children: [{ path: 'farmDetails/:id', component: FarmDetailsComponent, canActivate: [FarmDetailGrdGuard] }]
      },*/
      { path: 'farmsMarket', loadChildren: './farms-market-module/farms-market-module.module#FarmsMarketModuleModule'},
      /*{ path: 'error', component: ErrorComponent }*/    
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
