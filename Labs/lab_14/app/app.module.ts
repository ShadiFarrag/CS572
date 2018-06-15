import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';

// use FormsModule Only when using Template Driven Forms
import { FormsModule } from '@angular/forms';
// use ReactiveFormsModule Only when using Template Driven Forms
import { ReactiveFormsModule } from '@angular/forms';

import{HttpClientModule} from '@angular/common/http';
import { UsersServService } from './users-serv.service';
import { RouterModule } from '@angular/router';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: UserFormComponent},
      { path: 'thankyou', component: ThankyouComponent},
     ])
  ],
  providers: [UsersServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
