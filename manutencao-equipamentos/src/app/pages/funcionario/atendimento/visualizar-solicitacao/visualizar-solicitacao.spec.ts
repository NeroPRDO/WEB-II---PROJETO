import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { VisualizarSolicitacao } from './visualizar-solicitacao';

describe('VisualizarSolicitacao', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [provideRouter, VisualizarSolicitacao]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(VisualizarSolicitacao);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
