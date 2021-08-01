import { Component, OnInit, Input } from '@angular/core';
import { EcEditModalComponent } from '../ec-edit-modal/ec-edit-modal.component';
import {
  deleteItemsArray,
  setItem,
} from '../ec-entry-item-list/item-list-data';
import { amountHighlight } from './amount-highlight.directive';

@Component({
  selector: 'app-ec-entry-item',
  templateUrl: './ec-entry-item.component.html',
  styleUrls: ['./ec-entry-item.component.css'],
})
export class EcEntryItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() id: number = 0;
  @Input() amount: number = 0;
  @Input() description: string = '';
  @Input() entryType: string = '';

  editModal = false;

  // functions to handle events from same component
  onEditClick() {
    this.editModal = true;
  }
  onDeleteClick() {
    deleteItemsArray(this.id);
  }

  // functions to hande events from Child component
  onClickCancel() {
    this.editModal = false;
  }
  onClickSaveChanges(updatedForm) {
    setItem({ id: this.id, ...updatedForm });
    this.editModal = false;
  }
}
