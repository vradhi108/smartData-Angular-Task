import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerprofileComponent } from './sellerprofile.component';

describe('SellerprofileComponent', () => {
  let component: SellerprofileComponent;
  let fixture: ComponentFixture<SellerprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerprofileComponent]
    });
    fixture = TestBed.createComponent(SellerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
