import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcEntryItemComponent } from './ec-entry-item.component';

describe('EcEntryItemComponent', () => {
  let component: EcEntryItemComponent;
  let fixture: ComponentFixture<EcEntryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcEntryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcEntryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
