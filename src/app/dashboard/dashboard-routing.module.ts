import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DashboardFullComponent, DashboardComponent } from './components';

export const DashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardFullComponent,
        children: [ { path: '', component: DashboardComponent} ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(DashboardRoutes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {
}