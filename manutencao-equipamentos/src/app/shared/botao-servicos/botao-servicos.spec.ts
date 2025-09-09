import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoServicos } from './botao-servicos';

describe('BotaoServicos', () => {
  let component: BotaoServicos;
  let fixture: ComponentFixture<BotaoServicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoServicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoServicos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
