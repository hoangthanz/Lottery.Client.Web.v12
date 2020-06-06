import { Component, OnInit } from '@angular/core';
import { BaseComponentService } from 'src/app/shared/components/base-components/base-component.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CurrencyPipe, DatePipe, Location } from '@angular/common';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-register-subordinate-member',
  templateUrl: './register-subordinate-member.component.html',
  styleUrls: ['./register-subordinate-member.component.css'],
})
export class RegisterSubordinateMemberComponent extends BaseComponentService
  implements OnInit {
  registerForm: FormGroup;

  currentUser;
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
    this.currentUser = this.ConvertStringToObject(
      localStorage.getItem('tokenPayload')
    );

    this.registerForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
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
      rootUserId: new FormControl(this.currentUser.Id, [Validators.required]),
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
