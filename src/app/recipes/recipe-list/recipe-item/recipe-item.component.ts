import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input()  recipeData: Recipe;
  @Input() Index:number;
  //  @Output () recipeEventEmitter = new EventEmitter <void>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  viewClickedRecipe() {
    // this.recipeEventEmitter.emit();
    //console.log("========================================="+this.recipeData.name);
    this.recipeService.selectRecipe.next(this.recipeData);
  }
}
