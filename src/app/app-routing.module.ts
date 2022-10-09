import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';


const routes: Routes =
  [{ path: '', redirectTo: 'user-login', pathMatch: 'full' },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'customer', component: CustomerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
