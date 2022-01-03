import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListsComponent } from './ruta-lists.component';

describe('RutaListsComponent', () => {
  let component: RutaListsComponent;
  let fixture: ComponentFixture<RutaListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
