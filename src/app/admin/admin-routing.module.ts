import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCollectionComponent } from '../components/new-collection/new-collection.component';
import { AuthGuard } from './AuthGuard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductsManagementComponent } from './components/products-management/products-management.component';

const routes: Routes = [
  {
    path:'',
    component:NewCollectionComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
        canActivate: [AuthGuard] // Add canActivate guard to this route
      },
      {
        path: 'products/manage',
        component: ProductsManagementComponent,
        canActivate: [AuthGuard] // Add canActivate guard to this route
      }
    ]
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }