import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { LoginComponent } from './content/login/login.component';
import { RoleGuardService } from './shared/services/role-guard.service';
import { AccountManageComponent } from './content/account-manage/account-manage.component';
import { RulesComponent } from './content/static-components/rules/rules.component';
import { PersonalInformationComponent } from './content/personal-information/personal-information.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'lottery',
    component: LayoutComponent,
    canActivate: [RoleGuardService],
    children: [
      { path: ' ', redirectTo: 'account' },
      { path: 'account', component: AccountManageComponent },
      { path: 'rule', component: RulesComponent },
      { path: 'personal-information', component: PersonalInformationComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
