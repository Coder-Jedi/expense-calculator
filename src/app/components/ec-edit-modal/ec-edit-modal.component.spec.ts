import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcEditModalComponent } from './ec-edit-modal.component';

describe('EcEditModalComponent', () => {
  let component: EcEditModalComponent;
  let fixture: ComponentFixture<EcEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
