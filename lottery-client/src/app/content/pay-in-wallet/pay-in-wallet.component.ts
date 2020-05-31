import { Component, OnInit } from '@angular/core';
import { BaseComponentService } from 'src/app/shared/components/base-components/base-component.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-pay-in-wallet',
  templateUrl: './pay-in-wallet.component.html',
  styleUrls: ['./pay-in-wallet.component.css'],
})
export class PayInWalletComponent extends BaseComponentService
  implements OnInit {
    
  constructor(
    private userService: UserService,
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe
  ) {
    super(toastr, router, currencyPipe, datePipe);
  }

  ngOnInit() {}
}
