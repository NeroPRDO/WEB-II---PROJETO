import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAcoesFuncionario } from './painel-acoes-funcionario';

describe('PainelAcoesFuncionario', () => {
  let component: PainelAcoesFuncionario;
  let fixture: ComponentFixture<PainelAcoesFuncionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelAcoesFuncionario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelAcoesFuncionario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
