import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaBookmarksComponent } from './ruta-bookmarks.component';

describe('RutaBookmarksComponent', () => {
  let component: RutaBookmarksComponent;
  let fixture: ComponentFixture<RutaBookmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaBookmarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
