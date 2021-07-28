import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDonorComponent } from './admin-edit-donor.component';

describe('AdminEditDonorComponent', () => {
  let component: AdminEditDonorComponent;
  let fixture: ComponentFixture<AdminEditDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
