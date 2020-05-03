import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { 
  DashboardModule,
  DashboardRoutingModule
} from './dashboard';

import { ListModule, ListRoutingModule } from './list';

import { NavBarComponent } from './main/components/nav-bar/nav-bar.component';
import { SideBarComponent } from './main/components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    DashboardRoutingModule,
    ListModule,
    ListRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
