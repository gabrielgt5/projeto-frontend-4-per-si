import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { MyProductComponent } from './components/my-product/my-product.component';

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ProductRegistrationComponentComponent } from './components/product-registration-component/product-registration-component.component';
import { TableProductComponent } from './components/table-product/table-product.component';
import { SwitchComponent } from './components/switch/switch.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NavItemComponent,
    FormRegisterComponent,
    SwitchComponent,
    TableProductComponent,
    ProductRegistrationComponentComponent,
    MyProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
