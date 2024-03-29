import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PipeModule } from '../../shared/pipe/pipe.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ExpenseStatisticComponent } from './expense-statistic/expense-statistic.component';
import { ChartModule } from '../../shared/modules/chart/chart.module';
import { UrgentTaskComponent } from './urgent-task/urgent-task.component';
import { ProjectDirectoryComponent } from './project-directory/project-directory.component';
import { NewCommentsComponent } from './new-comments/new-comments.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { SectorItemsComponent } from './sector-items/sector-items.component';
import { TeamDirectoryModule } from '../../shared/modules/team-directory/team-directory.module';
import { MainBreadcrumbModule } from "../../shared/modules/main-breadcrumb/main-breadcrumb.module";

@NgModule({
    declarations: [
        DashboardComponent,
        ExpenseStatisticComponent,
        UrgentTaskComponent,
        ProjectDirectoryComponent,
        NewCommentsComponent,
        InfoCardComponent,
        SectorItemsComponent
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InputTextModule,
    AvatarModule,
    CalendarModule,
    CardModule,
    RadioButtonModule,
    FormsModule,
    DividerModule,
    PipeModule,
    NgApexchartsModule,
    ChartModule,
    TeamDirectoryModule,
    MainBreadcrumbModule
  ]
})
export class DashboardModule {}
