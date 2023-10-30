import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { YogaComponent } from './yoga/yoga.component';
import { HomeComponent } from './home/home.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { ConsultComponent } from './consult/consult.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'yoga',component:YogaComponent},
  {path:'login',component:LoginComponent},
  {path:'pharmacy',component:PharmacyComponent},
  {path:'consult',component:ConsultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
