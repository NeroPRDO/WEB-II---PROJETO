import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSend } from './btn-send';

describe('BtnSend', () => {
  let component: BtnSend;
  let fixture: ComponentFixture<BtnSend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSend);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
