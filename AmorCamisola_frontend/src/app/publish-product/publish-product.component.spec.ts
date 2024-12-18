import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishProductComponent } from './publish-product.component';

describe('PublishProductComponent', () => {
  let component: PublishProductComponent;
  let fixture: ComponentFixture<PublishProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
