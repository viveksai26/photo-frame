import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginService } from 'src/app/modules/core/guards/auto-login.service';
import { SecureLayoutComponent } from 'src/app/modules/shared/layout/secure/secure-layout/secure-layout.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SecureLayoutComponent,
    children: [{ path: '', component: DashboardComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
