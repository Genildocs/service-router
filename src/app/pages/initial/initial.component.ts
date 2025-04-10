import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-initial',
  imports: [],
  templateUrl: './initial.component.html',
  styles: ``,
})
export class InitialComponent {
  @Input() isActive!: string;
  @Input() isAdmin!: string;
}
