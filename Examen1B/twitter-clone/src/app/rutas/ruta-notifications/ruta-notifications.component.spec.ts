import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNotificationsComponent } from './ruta-notifications.component';

describe('RutaNotificationsComponent', () => {
  let component: RutaNotificationsComponent;
  let fixture: ComponentFixture<RutaNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
