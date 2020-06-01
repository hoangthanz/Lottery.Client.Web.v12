import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BaseComponentService } from 'src/app/shared/components/base-components/base-component.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent extends BaseComponentService implements OnInit {
  titleTop = 'Đăng ký';

  registerForm: FormGroup;
  constructor(
    public toastr: ToastrService,
    public router: Router,
    public currencyPipe: CurrencyPipe,
    public datePipe: DatePipe,
    private location: Location,
    private loginService: LoginService
  ) {
    super(toastr, router, currencyPipe, datePipe);
  }

  ngOnInit() {
    this.initializeRegisterForm();
  }

  initializeRegisterForm() {
    this.registerForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{9,})/),
      ]),
      transactionPassword: new FormControl(null, [Validators.required]),
      nickName: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  register() {
    const user = this.registerForm.value;

    if (this.registerForm.valid && this.isVerified(user)) {
      this.loginService.register(user).subscribe(
        (response) => {
          this.ShowSuccessMessage('Đăng ký thành công!');
          this.location.back();
        },
        (error) => {
          this.ShowResponseMessage(error);
        }
      );
    }
  }

  isVerified(user) {
    if (user.password == user.transactionPassword) {
      this.ShowWarningMessage(
        'Mật khẩu và mật khẩu thanh toán không trùng nhau!'
      );
      return false;
    }
    return true;
  }
}
