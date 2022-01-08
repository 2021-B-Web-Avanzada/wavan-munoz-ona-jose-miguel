import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMentionNotificationComponent } from './ruta-mention-notification.component';

describe('RutaMentionNotificationComponent', () => {
  let component: RutaMentionNotificationComponent;
  let fixture: ComponentFixture<RutaMentionNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaMentionNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMentionNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
