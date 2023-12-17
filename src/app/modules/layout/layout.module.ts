import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { DashboardModule } from '../dashboard/dashboard.module';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard', component: LayoutComponent},
  
];

@NgModule({
  declarations: [LayoutComponent, TopNavigationComponent],
  imports: [CommonModule, RouterModule.forChild(routes), DashboardModule],
})
export class LayoutModule {}
