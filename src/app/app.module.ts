import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './pages/home/components/about/about.component';
import { ProjectsComponent } from './pages/home/components/projects/projects.component';
import { ContactComponent } from './pages/home/components/contact/contact.component';
import { HeaderComponent } from './pages/home/components/header/header.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: 'portfolio',
        component: HomeComponent
      },
      {
        path: '',
        component: LandingComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
