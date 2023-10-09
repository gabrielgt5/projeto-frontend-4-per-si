import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: 'nav-item.component.html',
  styleUrls: ['nav-item.component.css'],
})
export class NavItemComponent {
  @Input() descricao: string = '';
  @Input() caminhoImagem: string = '';
  @Input() corTexto: string = '';
}
