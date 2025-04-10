import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private _router = inject(Router);

  listLink: any[] = [
    { nome: 'initial' },
    { nome: 'contatos' },
    { nome: 'informacoes' },
    { nome: 'cards' },
  ];

  routerIsActive!: boolean;

  ngOnInit(): void {}

  redirect(value: string) {
    if (value === 'initial') {
      console.log('Value', value);
      this._router.navigate(['initial'], {
        queryParams: {
          isAdmin: false,
          isActive: true,
        },
      });
    } else if (value === 'informacoes') {
      this._router.navigate(['informacoes'], {
        queryParams: {
          nome: 'Carla',
          idade: 28,
        },
      });
    } else {
      this._router.navigate([value]);
    }
  }
}
