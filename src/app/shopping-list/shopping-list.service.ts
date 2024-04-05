import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10),
    ];

    getShoppingList() {
        return this.ingredients.slice();
    }

    addIngredient(ingName: string, ingAmount: number) {
        const existingIngredient = this.ingredients.find((ingredient) => ingredient.name === ingName);
        if (existingIngredient) {
            existingIngredient.amount += ingAmount;
        } else {
            const newIngredient = new Ingredient(ingName, ingAmount);
            this.ingredients.push(newIngredient);
        }
        this.ingredientsChanged.emit(this.ingredients);
    }
}