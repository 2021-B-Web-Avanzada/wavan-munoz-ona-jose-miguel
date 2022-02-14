import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarMuseoComponent } from './ruta-editar-museo.component';

describe('RutaEditarMuseoComponent', () => {
  let component: RutaEditarMuseoComponent;
  let fixture: ComponentFixture<RutaEditarMuseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEditarMuseoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarMuseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
