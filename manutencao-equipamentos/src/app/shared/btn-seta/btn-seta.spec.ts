import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSeta } from './btn-seta';

describe('BtnSeta', () => {
  let component: BtnSeta;
  let fixture: ComponentFixture<BtnSeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSeta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnSeta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
