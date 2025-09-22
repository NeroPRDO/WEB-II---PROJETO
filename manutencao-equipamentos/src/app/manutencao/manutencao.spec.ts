import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManutencaoComponent } from './manutencao';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('ManutencaoComponent (RF014)', () => {
  let component: ManutencaoComponent;
  let fixture: ComponentFixture<ManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManutencaoComponent, RouterTestingModule, FormsModule]
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

  it('deve redirecionar solicitação para outro funcionário', () => {
    component.funcionarioDestino = 'Ana';
    component.redirecionar();
    expect(component.solicitacao.status).toBe('REDIRECIONADA');
    expect(component.solicitacao.historico.length).toBeGreaterThan(0);
  });

  it('não deve redirecionar para si mesmo', () => {
    component.funcionarioDestino = component.solicitacao.funcionarioOrigem;
    component.redirecionar();
    expect(component.solicitacao.historico.length).toBe(0);
  });

  it('deve finalizar solicitação', () => {
    component.finalizar();
    expect(component.solicitacao.status).toBe('FINALIZADA');
    expect(component.solicitacao.historico.pop()?.acao)
      .toContain('Finalizada pelo funcionário');
  });
});
