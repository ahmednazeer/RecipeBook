import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients: Ingredient[] ;
  subscribtion:Subscription;  /* = [
    new Ingredient('Apples', 5 ) ,
    new Ingredient('Tomattos', 15)
  ];*/
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList();

    this.subscribtion =this.shoppingListService.ingredientAdded.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  OnEditItem(index){
    console.log(index);
    this.shoppingListService.editIngredienetSubject.next(index);
  }
}
