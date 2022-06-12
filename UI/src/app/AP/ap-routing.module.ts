import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APInwardComponent } from '../AP/apinward/apinward.component';
import { AuthGuard } from '../common/auth.guard';
import { APComponent } from './ap.component';
import { APIActivationComponent } from './apactivation/apactivation.component';
import { APModificationComponent } from './apmodification/apmodification.component';

const routes : Routes = [
    {
        path : '', component: APComponent, children: [             
            { path: 'APInward', component: APInwardComponent, canActivate: [AuthGuard] },
            { path: 'APActivation', component: APIActivationComponent, canActivate: [AuthGuard] },
            { path: 'APModification', component: APModificationComponent, canActivate: [AuthGuard] },
        ]
    }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports:  [RouterModule]
})

export class APRoutingModule { }
