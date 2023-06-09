import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NewCollectionComponent } from './components/new-collection/new-collection.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [

  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'about',
    component: AboutComponent
  }
  ,
  {
    path: '',
    component: NewCollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
