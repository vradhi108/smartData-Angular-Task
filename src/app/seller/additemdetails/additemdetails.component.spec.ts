import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemdetailsComponent } from './additemdetails.component';

describe('AdditemdetailsComponent', () => {
  let component: AdditemdetailsComponent;
  let fixture: ComponentFixture<AdditemdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdditemdetailsComponent]
    });
    fixture = TestBed.createComponent(AdditemdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
