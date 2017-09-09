import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MdToolbarModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: '' , component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MdToolbarModule,
    MdSidenavModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
