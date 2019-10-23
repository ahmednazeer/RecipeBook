import {Http,Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe-list/recipe.model';
import {AutheService} from '../auth/authe.service';

@Injectable()
export class DataStorageService {
constructor(private http:Http,private reecipesService:RecipeService,private authService:AutheService){

}
storeRecipes(){
  return  this.http.put("https://ng-food-project.firebaseio.com/recipes.json?auth="+this.authService.getToken(),
    this.reecipesService.getRecipes());
}
getRecipes(){
  this.http.get("https://ng-food-project.firebaseio.com/recipes.json?auth="+this.authService.getToken()).subscribe(
    (response:Response)=>{
      const recipes:Recipe[]=response.json();
      this.reecipesService.setRecipes(recipes);
    }
  )
}
}
