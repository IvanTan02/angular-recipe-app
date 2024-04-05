import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    @Output()
    headerPressed = new EventEmitter<string>();

    onHeaderPressed(page: string) {
        console.log(page);
        this.headerPressed.emit(page);
    }
}