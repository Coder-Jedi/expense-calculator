import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { addItemsArray } from './components/ec-entry-item-list/item-list-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'expense-calculator';

  onEcSubmit(formValue) {
    console.log(formValue);
  }
}
