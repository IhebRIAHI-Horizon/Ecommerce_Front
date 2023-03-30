import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';

import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';


import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MediaMatcher } from '@angular/cdk/layout';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProductsManagementComponent } from './components/products-management/products-management.component';
import { DeleteProductComponent } from './modal/delete-product/delete-product.component';
import { AddProductComponent } from './modal/add-product/add-product.component';
import { EditProductComponent } from './modal/edit-product/edit-product.component';
import { DeleteMultipleProductsComponent } from './modal/delete-multiple-products/delete-multiple-products.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ProductsManagementComponent,
    DeleteProductComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteMultipleProductsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    
  ],
  providers: [MediaMatcher],
})
export class AdminModule { }
