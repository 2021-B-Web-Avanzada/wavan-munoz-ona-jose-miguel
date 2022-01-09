import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetActionComponent } from './tweet-action.component';

describe('TweetActionComponent', () => {
  let component: TweetActionComponent;
  let fixture: ComponentFixture<TweetActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
