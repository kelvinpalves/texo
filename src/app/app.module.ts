import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { ListModule, ListRoutingModule } from './list';
import { NavBarComponent } from './main/components/nav-bar/nav-bar.component';
import { SideBarComponent } from './main/components/side-bar/side-bar.component';
import { DashboardModule, DashboardRoutingModule } from './dashboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    LoadingBarHttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ 
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true
    }),
    DashboardModule,
    DashboardRoutingModule,
    ListModule,
    ListRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
