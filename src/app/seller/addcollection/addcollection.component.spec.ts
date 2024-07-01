import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcollectionComponent } from './addcollection.component';

describe('AddcollectionComponent', () => {
  let component: AddcollectionComponent;
  let fixture: ComponentFixture<AddcollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcollectionComponent]
    });
    fixture = TestBed.createComponent(AddcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
