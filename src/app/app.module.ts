import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CardPlanComponent } from './components/card-plan/card-plan.component';
import { ButtonAnimationComponent } from './components/button-animation/button-animation.component';
import { ComponentsComponent } from './pages/home/components/components.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ButtonComponent,
    HomeComponent,
    CardPlanComponent,
    ButtonAnimationComponent,
    ComponentsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
