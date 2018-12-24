import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockhistoryComponent } from './stockhistory/stockhistory.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ReachusComponent } from './reachus/reachus.component';
// import { AboutComponent } from './about/about.component';
// import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'StockhistoryComponent', component: StockhistoryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'reachus', component: ReachusComponent },
  { path: 'home', loadChildren: './home/home.module#HomeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
