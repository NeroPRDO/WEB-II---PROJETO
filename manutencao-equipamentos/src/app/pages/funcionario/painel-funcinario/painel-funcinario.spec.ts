import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelFuncinario } from './painel-funcinario';

describe('PainelFuncinario', () => {
  let component: PainelFuncinario;
  let fixture: ComponentFixture<PainelFuncinario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelFuncinario]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PainelFuncinario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
