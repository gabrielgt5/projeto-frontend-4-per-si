import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css'],
})
export class TableProductComponent {
  @Input() produtosCadastrados: any[];

  constructor() {
    this.produtosCadastrados = [];
  }
}
