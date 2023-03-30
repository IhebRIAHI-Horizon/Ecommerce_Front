import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMultipleProductsComponent } from './delete-multiple-products.component';

describe('DeleteMultipleProductsComponent', () => {
  let component: DeleteMultipleProductsComponent;
  let fixture: ComponentFixture<DeleteMultipleProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMultipleProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMultipleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
