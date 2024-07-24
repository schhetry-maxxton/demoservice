import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
// import axios from 'axios';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoService } from './crypto.service';
import { AxiosComponent } from './axios/axios.component'; 
import { AxiosServiceService } from './axios-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    AxiosComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CryptoService,AxiosServiceService, provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
