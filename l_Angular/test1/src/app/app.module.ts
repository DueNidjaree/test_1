import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { UserComponent } from './coponents/user/user.component';

import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import {MatCardModule} from '@angular/material/card'

// import {MatInputModule} from '@angular/material/input';
import { MaterialModule } from './material/material.module'
//  const material=[
//   MatCardModule,
//   MatSlideToggleModule,
//   MatInputModule
// ]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
