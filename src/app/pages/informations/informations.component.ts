import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informations',
  imports: [],
  templateUrl: './informations.component.html',
  styles: ``,
})
export class InformationsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  pessoa: { [key: string]: number | string } = {};

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.pessoa = { nome: params['nome'], idade: params['idade'] };
    });
  }
}
