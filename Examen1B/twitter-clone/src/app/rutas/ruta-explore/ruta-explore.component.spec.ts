import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaExploreComponent } from './ruta-explore.component';

describe('RutaExploreComponent', () => {
  let component: RutaExploreComponent;
  let fixture: ComponentFixture<RutaExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaExploreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
