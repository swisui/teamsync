import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from "primeng/radiobutton";
import { PipeModule } from '../../shared/pipe/pipe.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {InputTextModule} from "primeng/inputtext";
import {AvatarModule} from "primeng/avatar";
import {CalendarModule} from "primeng/calendar";
import {CardModule} from "primeng/card";

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, DashboardRoutingModule, InputTextModule, AvatarModule, CalendarModule, CardModule, RadioButtonModule, FormsModule, DividerModule, PipeModule],
})
export class DashboardModule {}