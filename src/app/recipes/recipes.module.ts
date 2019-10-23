import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecipesComponent} from './recipes.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {SelectRecipeComponent} from './select-recipe/select-recipe.component';
import {AuthGuardService} from '../auth/authGuard.service';
import {SharedModule} from '../shared/shared.module';

const recipesRoutes:Routes = [
  {path: '' , component:RecipesComponent,children:[
      {path:'' , component:SelectRecipeComponent},
      {path:'new',component:RecipeEditComponent,canActivate:[AuthGuardService]},
      {path:':id',component:RecipeDetailsComponent},
      {path:':id/edit',component:RecipeEditComponent,canActivate:[AuthGuardService]}
    ]},
]

@NgModule({
  declarations:[
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    SelectRecipeComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(recipesRoutes),
    SharedModule
  ],
  exports:[RouterModule]
})
export class RecipesModule {

}
