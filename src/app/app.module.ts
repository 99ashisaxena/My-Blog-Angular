import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { RatingComponent } from 'src/shared/rating.component';
import {HttpClientModule} from '@angular/common/http';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BlogComponent } from './blog/blog.component';
import { EditblogComponent } from './editblog/editblog.component';




@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    HomeComponent,
    CardComponent,
    TestimonialsComponent,
   
    FooterComponent,
    ErrorComponent,
    AboutComponent,
   RatingComponent,
   ContactFormComponent,
   BlogComponent,
   EditblogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
