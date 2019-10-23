import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe-list/recipe.model';
import {RecipeService} from '../recipe.service';
import {Ingredient} from '../../shared/ingredient.model';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

   recipeDetails: Recipe;
   id:number;
  constructor( private recipeService: RecipeService,private route :ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id=params['id'];
        this.recipeDetails=this.recipeService.getRecipeByID(this.id);
      }
    );
  }
  /*
  viewRecipeDetails(recipe: Recipe) {
    this.recipeDetails = recipe;
  } */
  AddIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.recipeService.addIngredients(ingredients);
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'],{relativeTo:this.route});
  }
}
