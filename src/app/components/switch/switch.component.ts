import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: 'switch.component.html',
  styleUrls: ['switch.component.css'],
})
export class SwitchComponent {
  @Input() isActive: boolean = false;

  onSwitchChange() {
    console.log('Estado do interruptor:', this.isActive);
  }
}
