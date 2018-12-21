import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'homeComponent', component: HomeComponent},
];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
