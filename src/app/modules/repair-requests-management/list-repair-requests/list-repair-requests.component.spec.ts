import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRepairRequestsComponent } from './list-repair-requests.component';

describe('ListRepairRequestsComponent', () => {
  let component: ListRepairRequestsComponent;
  let fixture: ComponentFixture<ListRepairRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRepairRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRepairRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
