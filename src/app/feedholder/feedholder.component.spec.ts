import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedholderComponent } from './feedholder.component';

describe('FeedholderComponent', () => {
  let component: FeedholderComponent;
  let fixture: ComponentFixture<FeedholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
