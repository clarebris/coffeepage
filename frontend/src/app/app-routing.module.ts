import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffroastersComponent } from './coffroasters/coffroasters.component';

const routes: Routes = [{ path: '', component: CoffroastersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
