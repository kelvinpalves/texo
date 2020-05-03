import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  ListMoviesComponent,
  ListComponent
} from './components';

import { ListService } from './services';

@NgModule({
  declarations: [
    ListMoviesComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    ListService
  ]
})
export class ListModule { }
