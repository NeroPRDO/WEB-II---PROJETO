import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGradient } from './btn-gradient';

describe('BtnGradient', () => {
  let component: BtnGradient;
  let fixture: ComponentFixture<BtnGradient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnGradient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnGradient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
