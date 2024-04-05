import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super tasty schnitzel!',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/220px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20),
            ]),
        new Recipe(
            'Big Fat Burger',
            'A super tasty burger!',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/McDonald%27s_Quarter_Pounder_with_Cheese%2C_United_States.jpg/300px-McDonald%27s_Quarter_Pounder_with_Cheese%2C_United_States.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
            ]),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}