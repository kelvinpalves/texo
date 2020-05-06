import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from './services';

import { 
  DashboardFullComponent, 
  DashboardComponent, 
  MultipleWinnersComponent ,
  TopStudiosComponent,
  ProducersComponent,
  MovieWinnersComponent
} from './components';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardFullComponent,
    MultipleWinnersComponent,
    TopStudiosComponent,
    ProducersComponent,
    MovieWinnersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
