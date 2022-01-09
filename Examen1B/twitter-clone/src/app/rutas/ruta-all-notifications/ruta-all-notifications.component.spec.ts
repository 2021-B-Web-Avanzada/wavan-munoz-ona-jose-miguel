import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAllNotificationsComponent } from './ruta-all-notifications.component';

describe('RutaAllNotificationsComponent', () => {
  let component: RutaAllNotificationsComponent;
  let fixture: ComponentFixture<RutaAllNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaAllNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAllNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
