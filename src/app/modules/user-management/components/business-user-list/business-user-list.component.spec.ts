import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUserListComponent } from './business-user-list.component';

describe('BusinessUserListComponent', () => {
  let component: BusinessUserListComponent;
  let fixture: ComponentFixture<BusinessUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
