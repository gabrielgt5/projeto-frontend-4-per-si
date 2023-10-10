import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css'],
})
export class MyProductComponent {
  produtosCadastrados: Produto[] = [];

  adicionarProduto(produto: Produto) {
    this.produtosCadastrados.push(produto);
  }
}
