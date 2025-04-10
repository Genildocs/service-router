import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserCardsListService } from '../../../../services/user-card-list.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-debit',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './debit.component.html',
  styles: ``,
})
export class DebitComponent implements OnInit {
  private _userCardList = inject(UserCardsListService);

  list$!: Observable<any>;

  ngOnInit(): void {
    this.list$ = this._userCardList.getUserCardsByType('debito');
  }
}
