import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoSwitch } from './botao-switch';

describe('BotaoSwitch', () => {
  let component: BotaoSwitch;
  let fixture: ComponentFixture<BotaoSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
