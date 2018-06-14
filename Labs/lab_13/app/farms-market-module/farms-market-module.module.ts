import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmsComponentComponent } from './farms-component/farms-component.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import {FarmDetailGrdGuard} from "./farm-detail-grd.guard";

@NgModule({
  imports: [
    CommonModule,
    /*RouterModule,*/
    RouterModule.forChild([
      { path: '', component: FarmsComponentComponent },
      { path: '', component: FarmsComponentComponent, 
        children: [{ path: 'farmDetails/:id', component: FarmDetailsComponent, canActivate: [FarmDetailGrdGuard] }]
      },
      { path: 'error', component: ErrorComponent }
    ]) 
  ],
  declarations: [FarmsComponentComponent, FarmDetailsComponent, ErrorComponent],
  exports:[FarmsComponentComponent,FarmDetailsComponent, ErrorComponent],
  bootstrap: [FarmsComponentComponent]
})
export class FarmsMarketModuleModule { }
