import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLogin } from './btn-login';

describe('BtnLogin', () => {
  let component: BtnLogin;
  let fixture: ComponentFixture<BtnLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
