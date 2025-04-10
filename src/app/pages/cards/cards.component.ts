import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { UserCardsListService } from '../../services/user-card-list.service';

@Component({
  selector: 'app-cards',
  imports: [RouterOutlet],
  templateUrl: './cards.component.html',
  styles: ``,
})
export class CardsComponent implements OnInit {
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  private _userCardList = inject(UserCardsListService);

  ngOnInit(): void {}

  redirectCredit(params: string) {}

  redirectDebit(params: string) {}

  redirect(params: string) {
    if (params === 'credit') {
      this._userCardList.getUserCardsByType('credito').subscribe((cred) => {
        this._router.navigate([params], {
          relativeTo: this._activatedRoute,
          queryParams: {
            id: cred[0].id,
          },
        });
      });
    } else {
      this._userCardList.getUserCardsByType('debito').subscribe((debi) => {
        this._router.navigate([params], {
          relativeTo: this._activatedRoute,
          queryParams: {
            id: debi[0].id,
          },
        });
      });
    }
  }
}
