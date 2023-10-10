import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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
