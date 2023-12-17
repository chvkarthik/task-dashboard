import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from '../shared/progress-bar/progress-bar.module';
import { DisplayDataComponent } from './components/overview/display-data/display-data.component';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { CardActionsComponent } from './components/overview/card-actions/card-actions.component';
import { TransactionsHistoryComponent } from './components/overview/display-data/transactions-history/transactions-history.component';
import { MoneyStatisticsComponent } from './components/overview/display-data/money-statistics/money-statistics.component';
import { CustomModalModule } from '../shared/custom-modal/custom-modal.module';

const routes: Routes = [
  // {path: '', component: DashboardComponent},
  {path: 'overview', component: OverviewComponent}
]


@NgModule({
  declarations: [DashboardComponent, OverviewComponent, SidebarComponent, DisplayDataComponent, CardActionsComponent, TransactionsHistoryComponent, MoneyStatisticsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ProgressBarModule, AgChartsAngularModule, CustomModalModule],
  exports: [RouterModule, DashboardComponent]
})
export class DashboardModule {}
