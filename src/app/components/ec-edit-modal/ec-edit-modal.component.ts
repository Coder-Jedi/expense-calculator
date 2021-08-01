import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getItem } from '../ec-entry-item-list/item-list-data';

@Component({
  selector: 'app-ec-edit-modal',
  templateUrl: './ec-edit-modal.component.html',
  styleUrls: ['./ec-edit-modal.component.css'],
})
export class EcEditModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.entryItem = getItem(this.entryID);

    this.itemForm = new FormGroup({
      type: new FormControl(this.entryItem.type, Validators.required),
      amount: new FormControl(this.entryItem.amount, [
        Validators.pattern('^[0-9]*$'),
        Validators.required,
      ]),
      description: new FormControl(this.entryItem.description),
    });
  }

  @Input() entryID = 0;
  @Output() clickCancel = new EventEmitter();
  @Output() clickSaveChanges = new EventEmitter();

  entryItem;
  itemForm;

  onSubmit() {
    this.clickSaveChanges.emit(this.itemForm.value);
  }

  onClickCancel() {
    this.clickCancel.emit('');
  }
}
