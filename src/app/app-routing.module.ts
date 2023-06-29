import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YadagiriTestComponent } from './b-yadagiri/yadagiri-test/yadagiri-test.component';
import { SandeepTestComponent } from './g-sandeep/sandeep-test/sandeep-test.component';
import { NareshComponent } from './Naresh/naresh/naresh.component';
import { DLoginComponent } from './dinesh/d-login/d-login.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'yadagiri',
    component: YadagiriTestComponent,
  },
  {
    path: "mahesh", loadChildren: () => import('./maheshreddy/maheshreddy.module').then(m => m.MaheshReddyModule),
  },
  {
    path: 'mohammad',
    loadChildren: () => import('./mohammad-module/mohammad-module.module').then(m => m.MohammadModuleModule)
  },
   {path:'dinesh',component:DLoginComponent},
   {path: "Sandeep", loadChildren:()=>import('./g-sandeep/Components/sandeep/sandeep.module').then((route)=>route.SandeepModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
