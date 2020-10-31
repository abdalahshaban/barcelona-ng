import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUserListComponent } from './basic-user-list.component';

describe('BasicUserListComponent', () => {
  let component: BasicUserListComponent;
  let fixture: ComponentFixture<BasicUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
