import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTagAddComponent } from './product-tag-add.component';

describe('ProductTagAddComponent', () => {
  let component: ProductTagAddComponent;
  let fixture: ComponentFixture<ProductTagAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTagAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTagAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
