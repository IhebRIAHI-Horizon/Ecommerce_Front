import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { NewCollectionComponent } from './components/new-collection/new-collection.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FooterComponent } from './components/footer/footer.component';
import { TopComponent } from './components/top/top.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { AboutComponent } from './components/about/about.component';
import {GMapModule} from 'primeng/gmap';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CallToActionComponent,
    NewCollectionComponent,
    CartComponent,
    FooterComponent,
    TopComponent,

    LoginComponent,
    ProductsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSliderModule,
    MatIconModule,
    MatCardModule,
    GMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
