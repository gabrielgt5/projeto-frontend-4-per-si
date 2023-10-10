import IProvider from './provider.model';

export interface IProduct {
  id?: number;
  descricao: string;
  valor: number;
  quantidade: number;
  unidadeMedida: string;
  fornecedor: string;
  ativo: boolean;
}
