import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EcEntryItemComponent } from './components/ec-entry-item/ec-entry-item.component';
import { EcEntryItemListComponent } from './components/ec-entry-item-list/ec-entry-item-list.component';
import { EcFormComponent } from './components/ec-form/ec-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EcEntryItemComponent,
    EcEntryItemListComponent,
    EcFormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
