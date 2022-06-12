import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared-module/shared-module.module';

//Components
import { ApinwardLoginComponent } from './Login/apinward-login.component';
import { ComponentsModule } from './components/components.module';
import { NgSelectFormFieldControlDirective } from 'src/Util/ng-select.directive';
import { RegisterComponent } from './register/register.component';
import { CrmComponent } from './crm/crm.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';



@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    SharedModule,
    NgbModule,
    MatDialogModule,
    MatExpansionModule,
    FormsModule
    
  ],

  declarations: [
    AppComponent,
    ApinwardLoginComponent,
    RegisterComponent,
    CrmComponent,
    CustomerinfoComponent,
    
  ],
  
  exports: [
    SharedModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
