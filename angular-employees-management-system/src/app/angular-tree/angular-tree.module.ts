import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../ng-zorro-antd/ng-zorro-antd.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { PagesComponent } from './pages/pages.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserutilityService } from './services/positionUtility.service';
import { EmployeePositionService } from './services/employee-position.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PositionsComponent } from './positions/positions.component';
import { AngularTreeRoutingModule } from './angular-tree-routing.module';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';




@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,  
    PositionsComponent,
    TreeViewComponent, 
    PageNotFoundComponent, 
    RegistrationFormComponent, 
     
  ],
  exports: [
    PagesComponent,
    AngularTreeRoutingModule,
    NavBarComponent,
    NzTableModule,
    HomeComponent,
    PositionsComponent,
    TreeViewComponent,
    NavBarComponent
    
    
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    AngularTreeRoutingModule
  ],
  providers:[
    UserutilityService, 
    EmployeePositionService
  ]
})
export class AngularTreeModule { }
