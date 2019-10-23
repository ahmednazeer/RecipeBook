import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';

export class ShoppingListService {

  ingredientAdded = new Subject<Ingredient []>();
  editIngredienetSubject=new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5 ) ,
    new Ingredient('Tomattos', 15)
  ];
  getShoppingList() {
    return this.ingredients.slice();
  }
  AddIngredient( name: string , amount: number ) {
    console.log(name);
    this.ingredients.push( new Ingredient(name, amount));
    this.ingredientAdded.next(this.ingredients.slice());
  }
  editIngredient(index:number,ingredient:Ingredient){
    console.log("Index : ",index);
    console.log(ingredient);
    this.ingredients[index]=ingredient;
    console.log(this.ingredients);
    this.ingredientAdded.next(this.ingredients.slice());

  }

  deleteItem(index){
    this.ingredients.splice(index,1);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
