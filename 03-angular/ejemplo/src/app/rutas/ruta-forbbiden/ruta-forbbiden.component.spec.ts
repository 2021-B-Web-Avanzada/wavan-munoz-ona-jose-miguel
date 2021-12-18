import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaForbbidenComponent } from './ruta-forbbiden.component';

describe('RutaForbbidenComponent', () => {
  let component: RutaForbbidenComponent;
  let fixture: ComponentFixture<RutaForbbidenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaForbbidenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaForbbidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
