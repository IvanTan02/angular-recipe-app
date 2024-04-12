import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10),
  ];

  getShoppingList() {
    return this.ingredients.slice();
  }

  addIngredient(ingName: string, ingAmount: number) {
    const existingIngredient = this.ingredients.find(
      (ingredient) => ingredient.name === ingName
    );
    if (existingIngredient) {
      existingIngredient.amount += ingAmount;
    } else {
      const newIngredient = new Ingredient(ingName, ingAmount);
      this.ingredients.push(newIngredient);
    }
    this.ingredientsChanged.next(this.ingredients);
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
