import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared-module.module';
import { APRoutingModule } from './ap-routing.module';
import { APInwardComponent } from './apinward/apinward.component';
import { APComponent } from './ap.component';

@NgModule ({
    imports: [
        CommonModule,
        APRoutingModule,
        SharedModule
    ],
    declarations: [
        APComponent,
        APInwardComponent
    ],
    exports: [
        SharedModule
    ],
    entryComponents: [

    ]
})

export class APModule { }
