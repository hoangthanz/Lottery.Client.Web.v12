import { Component, OnInit } from '@angular/core';
import { BaseComponentService } from '../../../shared/components/base-components/base-component.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { BankCardService } from '../../../shared/services/bank-card.service';
import { TransactionsService } from '../../../shared/services/Transactions.service';
import { WalletService } from '../../../shared/services/user/wallet.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent extends BaseComponentService implements OnInit {

  user = null;
  bank = null;
  isShow = false;
  isBank = false;
  coin = '0';
  coin_wallet = null;


  ownerBankSelected;
  ownerBanks = null;

  public infor_withdraw = {
    transactionType: 3,
    billStatus: 0,
    status: 1,
    coin: 0,
    content: null,
    userId: null,
    bankCardId: null,
  };

  constructor(
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe,
    private bankCardService: BankCardService,
    private transactionsService: TransactionsService,
    private walletService: WalletService
  ) {
    super(toastr, router, currencyPipe, datePipe);
  }

  ngOnInit() {
    this.get_User();
    this.getAll_Bank()
  }

  
  show_deposit() {
    this.isShow = true;
    this.coin = '0';
    this.get_infor_wallet();
  }

  changeBank(bank: any) {
    this.infor_withdraw.bankCardId = bank.id;
    this.bank = bank;
    this.isBank = true;
  }

  get_infor_wallet() {
    this.walletService.getWalletByUser(this.user.Id).subscribe(
      (response: any) => {
        if (response) {
          let wallet = response;
          this.coin_wallet = wallet.coin
        }
      },
      (error) => {
      }
    );

  }
    // Set userId
  get_User() {
      this.user = this.ConvertStringToObject(
        localStorage.getItem('tokenPayload')
      );
      this.infor_withdraw.userId = this.user.Id;
      let wallet = this.ConvertStringToObject(this.user.Wallet);
      this.infor_withdraw.content = 'Chau_Cay_' + wallet.WalletId;
      this.get_infor_wallet();
    }
  
  getAll_Bank() {
    this.bankCardService.get_Bank_by_userId(this.infor_withdraw.userId).subscribe(
      (response: any) => {
        if (response) {
          this.ownerBanks = response;
          this.ownerBankSelected = this.ownerBanks[0];
          this.infor_withdraw.bankCardId = this.ownerBanks[0].id;
          this.bank = this.ownerBanks[0];
          this.isBank = true;
        }
      },
      (error) => {
        this.ShowResponseMessage(error);
      }
    );
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  
  tranformMoney(value: string) {
    if (value) {
      this.coin = this.ConvertToMoney(value);
    }
  }

  cancel() {
    this.isShow = false;
  }

  submit() {
    this.infor_withdraw.coin = this.ConvertToNumber(this.coin);
    if (this.infor_withdraw.coin >= 200000) {
      this.transactionsService.post_deposit(this.infor_withdraw).subscribe(
        (response) => {
          this.ShowSuccessMessage('Thành công');
          this.isShow = false;
        },
        (error) => {
          this.ShowResponseMessage(error);
        }
      );
    } else {
      this.ShowWarningMessage('Số tiền phải lớn hơn 200.000 VNĐ');
    }
  }
}
