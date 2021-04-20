import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

import { TestimonialsComponent } from './testimonials/testimonials.component';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { BlogComponent } from './blog/blog.component';
import { EditblogComponent } from './editblog/editblog.component';




const routes: Routes = [
  { path: 'home', component:HomeComponent},
  {path :'card',component:CardComponent},
  {path :'card/edit/:id',component:EditblogComponent},
  {path :'card/create',component:BlogComponent},
  { path: 'app', component:AppComponent},

  {path:'footer',component:FooterComponent},
  {path:'about',component:AboutComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'contact-form',component:ContactFormComponent},
  {path:'blog',component:BlogComponent},

 {path:'editblog',component:EditblogComponent},

  { path: "", component: HomeComponent, pathMatch: 'full' },
  { path: "**", component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
