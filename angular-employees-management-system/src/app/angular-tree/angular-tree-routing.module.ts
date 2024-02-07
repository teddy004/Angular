import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PositionsComponent } from './positions/positions.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PagesComponent } from './pages/pages.component';
//import { RegistrationFormComponent } from './registration-form/registration-form.component';


const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'positions',
    component: PositionsComponent
  },
  // {path: 'edit-position/:id', component: RegistrationFormComponent }, 
  {
    path: 'treeview', 
    component: TreeViewComponent
  },
  {
    path: 'pages', 
    component: PagesComponent
  },
  {
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  {
    path: '**', 
  component: PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AngularTreeRoutingModule { }
