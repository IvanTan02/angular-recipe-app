import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping-list-app';
  @Input() currentPage = 'Recipes';

  navigate(page: string) {
    this.currentPage = page;
  }
}