import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode=false;
  recipeForm:FormGroup;
  recipe:Recipe;
  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params:Params) => {
        this.id=params['id'];
        this.editMode=params['id']!=null;
        console.log(this.editMode);
        this.initForm();
      }
    );

  }
initForm(){
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    let recipeIngredients=[];
    let recipeFormArray=new FormArray([]);

    if (this.editMode){
      const recipe=this.recipeService.getRecipeByID(this.id);
      recipeName=recipe.name;
      recipeDescription=recipe.description;
      recipeImagePath=recipe.imagePath;
      if (recipe.ingredients){
        recipeIngredients=recipe.ingredients;
        for (let item of recipeIngredients){
          recipeFormArray.push(
            new FormGroup({
              name:new FormControl(item.name,Validators.required),
              amount:new FormControl(item.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }

    }
    //console.log(recipe.name);
    this.recipeForm=new FormGroup({
      name:new FormControl(recipeName,Validators.required),
      imagePath:new FormControl(recipeImagePath,Validators.required),
      description:new FormControl(recipeDescription,Validators.required),
      ingredients:recipeFormArray
    });
}
  onAddIngredient(){
    (<FormArray> this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(),
        'amount':new FormControl()
      })
    );
  }
  onSubmit(){
    if (this.editMode){
      this.recipeService.updateRecipes(this.id,this.recipeForm.value);
      this.router.navigate(['../'],{relativeTo:this.route});
      //this.recipeForm.reset();

    }else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }

    this.onCancel();

  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  onRemoveIngredient(index){
    (<FormArray> this.recipeForm.get('ingredients')).removeAt(index);
  }
}
