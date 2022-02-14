import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNuevoMuseoComponent } from './ruta-nuevo-museo.component';

describe('RutaNuevoMuseoComponent', () => {
  let component: RutaNuevoMuseoComponent;
  let fixture: ComponentFixture<RutaNuevoMuseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaNuevoMuseoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNuevoMuseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
