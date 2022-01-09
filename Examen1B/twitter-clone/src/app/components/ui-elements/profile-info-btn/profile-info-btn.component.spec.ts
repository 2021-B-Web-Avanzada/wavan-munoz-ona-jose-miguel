import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoBtnComponent } from './profile-info-btn.component';

describe('ProfileInfoBtnComponent', () => {
  let component: ProfileInfoBtnComponent;
  let fixture: ComponentFixture<ProfileInfoBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfoBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
