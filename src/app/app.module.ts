import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './appRouting.module';
import {SelectRecipeComponent} from './recipes/select-recipe/select-recipe.component';

import {FormsModule} from '@angular/forms';
import {RecipeService} from './recipes/recipe.service';
import {HttpModule} from '@angular/http';
import {DataStorageService} from './shared/data-storage.service';

import {AutheService} from './auth/authe.service';
import {AuthGuardService} from './auth/authGuard.service';
import {RecipesModule} from './recipes/recipes.module';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shoping-list.module';
import {HeaderModule} from './header/header.module';
import {HomeComponent} from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,

    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingListModule,
    HeaderModule,
    FormsModule,
    HttpModule,
    SharedModule

  ],
  providers: [ShoppingListService,RecipeService,DataStorageService,AutheService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
