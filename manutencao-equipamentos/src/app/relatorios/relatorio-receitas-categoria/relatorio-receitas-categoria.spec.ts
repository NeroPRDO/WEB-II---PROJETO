import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatorioReceitasCategoria } from './relatorio-receitas-categoria';
import { RelatorioReceitasService } from '../../shared/relatorios/relatorio-receitas.service';

describe('RelatorioReceitasCategoria (RF020)', () => {
  let component: RelatorioReceitasCategoria;
  let fixture: ComponentFixture<RelatorioReceitasCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioReceitasCategoria],
      providers: [RelatorioReceitasService]
    }).compileComponents();

    fixture = TestBed.createComponent(RelatorioReceitasCategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
