import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared-module.module';
import { APInwardRoutingModule } from './apinward-routing.module';
import { APInwardComponent } from './apinward.component';
import { APInwardSearchComponent } from './apinward-search/apinward-search.component';
import { APInwardBranchComponent } from './apinward-branch/apinward-branch.component';
import { ApinwardBranchdetailsComponent } from './apinward-branchdetails/apinward-branchdetails.component';
import { ApinwardBankdetailsComponent } from './apinward-bankdetails/apinward-bankdetails.component';
import { ApinwardContactdetailsComponent } from './apinward-contactdetails/apinward-contactdetails.component';
import { ApinwardExchangelinkingComponent } from './apinward-exchangelinking/apinward-exchangelinking.component';
import { ApinwardBrokeragesharingComponent } from './apinward-brokeragesharing/apinward-brokeragesharing.component';
import { ApinwardOtherdetailsComponent } from './apinward-otherdetails/apinward-otherdetails.component';
import { ApinwardDocumentsComponent } from './apinward-documents/apinward-documents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule ({
    imports: [
        CommonModule,
        APInwardRoutingModule,
        SharedModule
    ],
    declarations: [
        APInwardComponent,
        APInwardSearchComponent,
        APInwardBranchComponent,
        ApinwardBranchdetailsComponent,
        ApinwardBankdetailsComponent,
        ApinwardContactdetailsComponent,
        ApinwardExchangelinkingComponent,
        ApinwardBrokeragesharingComponent,
        ApinwardOtherdetailsComponent,
        ApinwardDocumentsComponent,
    ],
    exports: [
        SharedModule
    ],
    entryComponents: [

    ]
})

export class APInwardModule { }
