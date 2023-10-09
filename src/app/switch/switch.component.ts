import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: 'switch.component.html',
  styleUrls: ['switch.component.css'],
})
export class SwitchComponent {
  checked: boolean = false;

  onSwitchChange() {
    console.log('Switch state:', this.checked);
  }
}
