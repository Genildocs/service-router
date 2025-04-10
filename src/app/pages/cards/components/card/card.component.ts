import { Component, inject, OnInit } from '@angular/core';
import { UserCardsListService } from '../../../../services/user-card-list.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styles: ``,
})
export class CardComponent implements OnInit {
  private _userCardList = inject(UserCardsListService);
  private _activatedRoute = inject(ActivatedRoute);
  userCard$!: Observable<any>;
  ngOnInit(): void {
    this.userCard$ = this._userCardList.getUserCardById(0);
  }
}
