import { Component, OnInit } from '@angular/core';
import { BaseComponentService } from 'src/app/shared/components/base-components/base-component.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent extends BaseComponentService implements OnInit {
  titleTop = 'Lottery';

  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    classname: 'my-custom-class',
    listBackgroundColor: `rgb(255, 255, 255)`,
    fontColor: `rgb(32, 32, 32)`,
    backgroundColor: `rgb(255, 255, 255)`,
    selectedListFontColor: `darkgrey`,
    highlightOnSelect: true,
    collapseOnSelect: true,
    rtlLayout: false,
  };

  expandCollapseStatus = 'expand';

  appitems = [
    {
      label: 'Lottery v1.0',
      imageIcon: '/assets/svg/undraw_playing_cards_cywn.svg',
    },
    {
      label: 'Quy định và luật lệ',
      icon: 'account_balance',
      onSelected: function () {},
    },
    {
      label: 'Cờ bạc có trách nhiệm',
      icon: 'description',
      onSelected: function () {
        console.log('Item 3');
      },
    },
    {
      label: 'Về chúng tôi',
      icon: 'group',
      onSelected: function () {
        console.log('Item 3');
      },
    },
    {
      label: 'Tuyên bố bản quyền',
      icon: 'free_breakfast',
      onSelected: function () {
        console.log('Item 3');
      },
    },
    {
      label: 'Chính sách bảo mật',
      icon: 'security',
      onSelected: function () {
        console.log('Item 3');
      },
    },
  ];

  constructor(
    private loginService: LoginService,
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe
  ) {
    super(toastr, router, currencyPipe, datePipe);
  }

  ngOnInit() {}

  selectedItem(e) {
    console.log(e);
  }
  selectedLabel(e) {
    console.log(e);
  }

  goToRuleScreen() {
    this.router.navigate['/rule'];
  }
  tranferToAccount() {
    this.titleTop = 'Tài khoản';
  }
}
