import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassifierComponent } from './views/classifier/classifier.component';


const routes: Routes = [
  {
    path: '', 
    component: ClassifierComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
