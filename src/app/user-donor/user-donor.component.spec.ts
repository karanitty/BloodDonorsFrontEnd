import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDonorComponent } from './user-donor.component';

describe('UserDonorComponent', () => {
  let component: UserDonorComponent;
  let fixture: ComponentFixture<UserDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
