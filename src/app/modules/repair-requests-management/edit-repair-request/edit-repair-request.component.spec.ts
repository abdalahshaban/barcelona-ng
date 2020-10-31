import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRepairRequestComponent } from './edit-repair-request.component';

describe('EditRepairRequestComponent', () => {
  let component: EditRepairRequestComponent;
  let fixture: ComponentFixture<EditRepairRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRepairRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRepairRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
