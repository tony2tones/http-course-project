import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';

import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  fetchRecipes() {
   return this.http.get('https://recipe-4f1fb.firebaseio.com/recipes.json')
   .map(
    (response: Response) => {
      // Assign response to Recipe Model 
      const recipes: Recipe[] = response.json();
      // Check if recipe contains ingredients array
      for(let recipe of recipes) {
        // If not then just add it as a blank array
        if(!recipe['ingredients']) {
          recipe['ingredients'] = [];
        }
      }
      return recipes;
    }
   )
   .subscribe(
     (recipes: Recipe[]) => {
       this.recipeService.setRecipes(recipes);
     }
   );
  }

  storeRecipes() {
    return this.http.put('https://recipe-4f1fb.firebaseio.com/recipes.json',this.recipeService.getRecipes());
  }

  
}
