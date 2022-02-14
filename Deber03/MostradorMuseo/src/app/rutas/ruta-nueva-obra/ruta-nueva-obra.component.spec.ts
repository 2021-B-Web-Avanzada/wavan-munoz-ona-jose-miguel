import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNuevaObraComponent } from './ruta-nueva-obra.component';

describe('RutaNuevaObraComponent', () => {
  let component: RutaNuevaObraComponent;
  let fixture: ComponentFixture<RutaNuevaObraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaNuevaObraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNuevaObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
