import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { BaseComponentService } from 'src/app/shared/components/base-components/base-component.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends BaseComponentService implements OnInit {
  titleTop = 'Đăng nhập';
  userName: string;
  password: string;
  rememberMe: boolean = false;
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
    if(localStorage.getItem('token') != null){
      this.GoTo('/lottery');
    }
  }

  ngOnInit() {}

  selectedItem(e) {
    console.log(e);
  }
  selectedLabel(e) {
    console.log(e);
  }

  login() {
    const user = {
      userName: this.userName,
      password: this.password,
      rememberMe: this.rememberMe,
    };

    this.loginService.login(user).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        const tokenPayload = decode(response.token);
        console.log(tokenPayload);
        localStorage.setItem('tokenPayload',this.ConvertObjectToString(tokenPayload));
        this.GoTo('lottery');
      },
      (error) => {
        this.ShowWarningMessage('Tài khoản hoăc mật khẩu không đúng!');
      }
    );
  }

}
