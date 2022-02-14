import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaObrasMuseoComponent } from './ruta-obras-museo.component';

describe('RutaObrasMuseoComponent', () => {
  let component: RutaObrasMuseoComponent;
  let fixture: ComponentFixture<RutaObrasMuseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaObrasMuseoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaObrasMuseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
