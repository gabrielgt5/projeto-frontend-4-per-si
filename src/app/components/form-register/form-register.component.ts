import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product..model';
import { produtos } from 'src/app/shared/products.list';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
})
export class FormRegisterComponent {
  produto: IProduct = {
    descricao: '',
    valor: 0,
    quantidade: 0,
    unidadeMedida: '',
    fornecedor: '',
    ativo: false,
  };

  cadastrarProduto(): void {
    this.produto.id = produtos.length + 1;
    produtos.push(this.produto);
    localStorage.setItem('tableProduct', JSON.stringify(produtos));

    this.produto = {
      descricao: '',
      valor: 0,
      quantidade: 0,
      unidadeMedida: '',
      fornecedor: '',
      ativo: false,
    };
  }
}
