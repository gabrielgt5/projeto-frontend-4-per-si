import { Component, EventEmitter, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
})
export class FormRegisterComponent {
  produto: Produto = {
    descricao: '',
    valor: 0,
    quantidade: 0,
    unidadeMedida: 0,
    fornecedor: '',
  };

  @Output() produtoCadastrado = new EventEmitter<Produto>();

  cadastrarProduto() {
    this.produtoCadastrado.emit(this.produto);
  }
}
