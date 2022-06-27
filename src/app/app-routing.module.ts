import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { FormComponent } from './components/pages/form/form.component';
import { TableComponent } from './components/pages/table/table.component';

const routes: Routes = [
  {path: '', component: TableComponent},
  {path: 'about', component: AboutComponent},
  {path: 'newcontact', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
