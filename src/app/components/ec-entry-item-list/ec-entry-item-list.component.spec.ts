import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcEntryItemListComponent } from './ec-entry-item-list.component';

describe('EcEntryItemListComponent', () => {
  let component: EcEntryItemListComponent;
  let fixture: ComponentFixture<EcEntryItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcEntryItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcEntryItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
