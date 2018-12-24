import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatNativeDateModule, MatTableModule } from '@angular/material';
import { MatIconModule, MatListModule, MatCardModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockhistoryComponent } from './stockhistory/stockhistory.component';
import { TestComponent } from './test/test.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ReachusComponent } from './reachus/reachus.component';

@NgModule({
  declarations: [
    AppComponent,
    StockhistoryComponent,
    TestComponent,
    AboutComponent,
    ProductsComponent,
    ReachusComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
