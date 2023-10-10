import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProductComponent } from './components/my-product/my-product.component';
import { ProductRegistrationComponentComponent } from './components/product-registration-component/product-registration-component.component';

const routes: Routes = [
  { path: 'meus-produtos', component: MyProductComponent },
  {
    path: 'cadastre-seu-produto',
    component: ProductRegistrationComponentComponent,
  },
  { path: '', redirectTo: '/cadastre-seu-produto', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
