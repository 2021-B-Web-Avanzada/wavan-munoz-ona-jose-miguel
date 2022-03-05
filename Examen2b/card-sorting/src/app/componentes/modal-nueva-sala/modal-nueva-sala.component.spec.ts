import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevaSalaComponent } from './modal-nueva-sala.component';

describe('ModalNuevaSalaComponent', () => {
  let component: ModalNuevaSalaComponent;
  let fixture: ComponentFixture<ModalNuevaSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNuevaSalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNuevaSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
