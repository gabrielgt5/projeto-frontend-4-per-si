import { IProduct } from '../models/product..model';

let produtos: IProduct[] = [];

const storedprodutos = localStorage.getItem('produtosList');
if (storedprodutos) {
  produtos = JSON.parse(storedprodutos);
}

export { produtos };
