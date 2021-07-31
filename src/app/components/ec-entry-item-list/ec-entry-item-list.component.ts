import { Component, OnInit, Input } from '@angular/core';
import { itemsArray, addItemsArray, deleteItemsArray, filteredArray } from './item-list-data';

@Component({
  selector: 'app-ec-entry-item-list',
  templateUrl: './ec-entry-item-list.component.html',
  styleUrls: ['./ec-entry-item-list.component.css']
})
export class EcEntryItemListComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  @Input() type = '';

  itemsArray = itemsArray;
  count = 2;

  addIncomeObject() {
    addItemsArray({
      id: this.count,
      type: 'income',
      amount: 1000*this.count,
      description: `Monthly Salary ${this.count}`,

    });
    this.count++;
  };
  addExpenseObject() {
    addItemsArray({
      id: this.count,
      type: 'expense',
      amount: 200*this.count,
      description: `Expenses no. ${this.count}`,

    });
    this.count++;
  };

  consolelogObject() {
    console.log(itemsArray);
  };

  deleteItem() {
    deleteItemsArray(this.count);
  };

}


