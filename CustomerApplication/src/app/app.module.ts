import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './app.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CustomerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class AppModule { }
