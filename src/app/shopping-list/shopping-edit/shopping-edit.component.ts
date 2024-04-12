import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', { static: false }) ingredientForm;
  editSubscription: Subscription;
  editMode = false;
  indexToEdit: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.editSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.indexToEdit = index;
        this.editedItem = this.shoppingListService.getIngredient(index);

        this.ingredientForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy() {
    this.editSubscription.unsubscribe();
  }

  onAddIngredient() {
    const ingName = this.ingredientForm.value.name;
    const ingAmount = this.ingredientForm.value.amount;

    if (this.editMode) {
      const ingredient = new Ingredient(ingName, ingAmount);
      this.shoppingListService.updateIngredient(this.indexToEdit, ingredient);
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(ingName, ingAmount);
    }
    this.ingredientForm.reset();
  }

  onClear() {
    this.ingredientForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.indexToEdit);
    this.onClear();
  }
}
