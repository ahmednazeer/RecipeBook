import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AutheService} from '../../auth/authe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {

  recipes: Recipe[] ;
  subscribtion:Subscription;
  // = [];
   /*
    new Recipe('Recipe Test Item', 'This is Description For Recipe' , 'https://bulma.io/images/bulma-logo.png'),
    new Recipe('Recipe Test Item', 'This is Description For Recipe' , 'https://bulma.io/images/bulma-logo.png')
  ];*/
  // selectedRecipe: Recipe;

  // @Output() selectRecipeEventEmitter = new EventEmitter <Recipe>();
  constructor(
  private recipeService: RecipeService,
  private router:Router,
  private route:ActivatedRoute,
  private authService:AutheService
  ) {
    // console.log(this.recipes[0].imagePath);
  }

  ngOnInit() {
    this.subscribtion= this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[]) => {
        this.recipes=recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }
  OnNewRecipeClicked(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }



}
