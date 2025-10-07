import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLogout } from './btn-logout';

describe('BtnLogout', () => {
  let component: BtnLogout;
  let fixture: ComponentFixture<BtnLogout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnLogout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLogout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
