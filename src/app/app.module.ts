import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ingredientcard } from './ingredients/ingredientcard';
import { perfectplanner } from './PerfectPlanner/perfectplannercard';

@NgModule({
  declarations: [
    AppComponent,
    ingredientcard,
    perfectplanner
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
