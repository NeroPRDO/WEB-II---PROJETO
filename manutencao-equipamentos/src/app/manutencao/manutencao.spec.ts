import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManutencaoComponent } from './manutencao';
import { RouterTestingModule } from '@angular/router/testing';

describe('ManutencaoComponent (RF014)', () => {
  let component: ManutencaoComponent;
  let fixture: ComponentFixture<ManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManutencaoComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should change status to ARRUMADA after efetuar manutencao', () => {
    component.iniciarEfetuar();
    component.descricao = 'Troca de tela';
    component.orientacoes = 'Voltar em 3 dias';
    component.salvarManutencao();

    expect(component.solicitacao.status).toBe('ARRUMADA');
    expect(component.solicitacao.manutencoes.length).toBeGreaterThan(0);
    const last = component.solicitacao.manutencoes[component.solicitacao.manutencoes.length - 1];
    expect(last.descricao).toBe('Troca de tela');
  });
});
