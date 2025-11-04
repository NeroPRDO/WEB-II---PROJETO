import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSwitch } from './btn-switch';

describe('BtnSwitch', () => {
  let component: BtnSwitch;
  let fixture: ComponentFixture<BtnSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
