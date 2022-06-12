import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../common/auth.guard';
import { ApinwardBankdetailsComponent } from './apinward-bankdetails/apinward-bankdetails.component';
import { APInwardBranchComponent } from './apinward-branch/apinward-branch.component';
import { ApinwardBranchdetailsComponent } from './apinward-branchdetails/apinward-branchdetails.component';
import { ApinwardBrokeragesharingComponent } from './apinward-brokeragesharing/apinward-brokeragesharing.component';
import { ApinwardContactdetailsComponent } from './apinward-contactdetails/apinward-contactdetails.component';
import { ApinwardDocumentsComponent } from './apinward-documents/apinward-documents.component';
import { ApinwardExchangelinkingComponent } from './apinward-exchangelinking/apinward-exchangelinking.component';
import { ApinwardOtherdetailsComponent } from './apinward-otherdetails/apinward-otherdetails.component';
import { APInwardSearchComponent } from './apinward-search/apinward-search.component';
import { APInwardComponent } from './apinward.component';

const routes : Routes = [
    {
        path : '', component: APInwardComponent, children: [             
            { path: 'APInwardSearch', component: APInwardSearchComponent, canActivate: [AuthGuard] },  
            { path: 'BranchDetails', component: APInwardBranchComponent, canActivate: [AuthGuard] },
            { path: 'BranchInfo', component: ApinwardBranchdetailsComponent, canActivate: [AuthGuard] },
            { path: 'BankDetails', component: ApinwardBankdetailsComponent, canActivate: [AuthGuard] },
            { path: 'ContactDetails', component: ApinwardContactdetailsComponent, canActivate: [AuthGuard] },
            { path: 'ExchangeLinking', component: ApinwardExchangelinkingComponent, canActivate: [AuthGuard] },
            { path: 'BrokerageSharing', component: ApinwardBrokeragesharingComponent, canActivate: [AuthGuard] },
            { path: 'OtherDetails', component: ApinwardOtherdetailsComponent, canActivate: [AuthGuard] },
            { path: 'Documents', component: ApinwardDocumentsComponent, canActivate: [AuthGuard] },
        ]
    }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports:  [RouterModule]
})

export class APInwardRoutingModule { }
