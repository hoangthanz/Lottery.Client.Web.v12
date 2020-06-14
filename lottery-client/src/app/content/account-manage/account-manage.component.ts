import { Component, OnInit } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { BaseComponentService } from 'src/app/shared/components/base-components/base-component.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';
import { WalletService } from 'src/app/shared/services/user/wallet.service';
import { SignalRService } from 'src/app/shared/services/signal-r.service';

@Component({
  selector: 'app-account-manage',
  templateUrl: './account-manage.component.html',
  styleUrls: ['./account-manage.component.css'],
})
export class AccountManageComponent extends BaseComponentService
  implements OnInit {
  avatar: string = 'assets/svg/undraw_profile_pic_ic5t.svg';

  user: any;

  wallet: any;
  constructor(
    private userService: UserService,
    private walletService: WalletService,
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe,
    public signalRService: SignalRService
  ) {
    super(toastr, router, currencyPipe, datePipe);
    this.user = this.ConvertStringToObject(
      localStorage.getItem('tokenPayload')
    );
  }

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferWalletDataListener();
    this.getWalletByUser(this.user.Id);
  }

  logout() {
    localStorage.clear();
    this.GoTo('login');
  }

  moveToPersonalInformation() {
    this.GoTo('personal-information');
  }

  getWalletByUser(userId: string) {
    this.walletService.getWalletByUser(userId).subscribe(
      (response) => {
        if (response) {
          this.wallet = response;
        }
      },
      (error) => {
        this.ShowResponseMessage(error);
      }
    );
  }
}
