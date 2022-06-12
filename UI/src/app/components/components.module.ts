import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared-module/shared-module.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({

  imports: [

    CommonModule,
    RouterModule,
    MatSelectModule,
    SharedModule

  ],

  declarations: [

    FooterComponent,
    NavbarComponent

  ],

  exports: [

    FooterComponent,
    NavbarComponent

  ]
})
export class ComponentsModule { }
