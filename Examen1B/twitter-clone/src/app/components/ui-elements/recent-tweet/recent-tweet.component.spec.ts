import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTweetComponent } from './recent-tweet.component';

describe('RecentTweetComponent', () => {
  let component: RecentTweetComponent;
  let fixture: ComponentFixture<RecentTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
