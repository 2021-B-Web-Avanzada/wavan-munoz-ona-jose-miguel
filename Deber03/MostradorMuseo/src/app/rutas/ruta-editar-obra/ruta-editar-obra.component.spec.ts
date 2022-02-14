import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarObraComponent } from './ruta-editar-obra.component';

describe('RutaEditarObraComponent', () => {
  let component: RutaEditarObraComponent;
  let fixture: ComponentFixture<RutaEditarObraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEditarObraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
