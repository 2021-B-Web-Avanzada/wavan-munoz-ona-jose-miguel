import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUnirseSalaComponent } from './modal-unirse-sala.component';

describe('ModalUnirseSalaComponent', () => {
  let component: ModalUnirseSalaComponent;
  let fixture: ComponentFixture<ModalUnirseSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUnirseSalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUnirseSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
