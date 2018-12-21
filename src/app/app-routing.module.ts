import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockhistoryComponent } from './stockhistory/stockhistory.component';

const routes: Routes = [
  { path: 'StockhistoryComponent', component: StockhistoryComponent },
  { path: 'home', loadChildren: './home/home.module#HomeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
