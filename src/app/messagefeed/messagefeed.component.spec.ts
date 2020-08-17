import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagefeedComponent } from './messagefeed.component';

describe('MessagefeedComponent', () => {
  let component: MessagefeedComponent;
  let fixture: ComponentFixture<MessagefeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagefeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagefeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
