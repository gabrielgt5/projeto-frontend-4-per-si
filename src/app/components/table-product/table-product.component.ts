import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product..model';
import { produtos } from 'src/app/shared/products.list';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css'],
})
export class TableProductComponent {
  tableProduct: IProduct[] = produtos;

  ngOnInit() {
    this.tableProduct = produtos;
    console.log(this.tableProduct);
  }
}
