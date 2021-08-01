import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EcEntryItemComponent } from './components/ec-entry-item/ec-entry-item.component';
import { EcEntryItemListComponent } from './components/ec-entry-item-list/ec-entry-item-list.component';
import { EcFormComponent } from './components/ec-form/ec-form.component';
import { EcEditModalComponent } from './components/ec-edit-modal/ec-edit-modal.component';
import { amountHighlight } from './components/ec-entry-item/amount-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    EcEntryItemComponent,
    EcEntryItemListComponent,
    EcFormComponent,
    EcEditModalComponent,
    amountHighlight,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
