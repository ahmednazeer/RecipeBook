import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('f',{static:false}) gredientForm:NgForm;
  editedIndex;
  EditedIngredient:Ingredient;
  isEditMode=false;
  constructor( private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editedIndex=this.shoppingListService.editIngredienetSubject.subscribe(
      (index:number)=>{
        this.isEditMode=true;
        this.EditedIngredient=this.shoppingListService.getShoppingList()[index];

        this.gredientForm.setValue({
          'name':this.EditedIngredient.name,
          'amount':this.EditedIngredient.amount
        });
        this.editedIndex=index;
        return index;
      }
    );
  }

  AddGradient() {
    //console.log(this.newIngredient.name);
    if (this.isEditMode){
      this.shoppingListService.editIngredient(this.editedIndex,new Ingredient(this. gredientForm.value['name'], this. gredientForm.value['amount']));

    }
    else {
      this.shoppingListService.AddIngredient(this. gredientForm.value['name'], this. gredientForm.value['amount']);
    }
    this.isEditMode=false;
    this.gredientForm.reset();
  }
  OnClearForm(){
    this.isEditMode=false;
    this.gredientForm.reset();
  }

  OnDeleteIngredient(){
    this.shoppingListService.deleteItem(this.editedIndex);
    this.isEditMode=false;
    this.gredientForm.reset();
  }

  OnSubmit(){

  }




}
