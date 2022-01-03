import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMessagesComponent } from './ruta-messages.component';

describe('RutaMessagesComponent', () => {
  let component: RutaMessagesComponent;
  let fixture: ComponentFixture<RutaMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
