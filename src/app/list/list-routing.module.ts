import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import {
    ListMoviesComponent, ListComponent
} from './components';

export const ListRoutes: Routes = [
    {
        path: 'list',
        component: ListMoviesComponent,
        children: [
            {
                path: '',
                component: ListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ListRoutes)
    ],
    exports: [RouterModule]
})

export class ListRoutingModule {
}
