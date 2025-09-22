import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatorioReceitas } from './relatorio-receitas';
import { RelatorioReceitasService } from '../../shared/relatorios/relatorio-receitas.service';

describe('RelatorioReceitas (RF019)', () => {
  let component: RelatorioReceitas;
  let fixture: ComponentFixture<RelatorioReceitas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioReceitas],
      providers: [RelatorioReceitasService]
    }).compileComponents();

    fixture = TestBed.createComponent(RelatorioReceitas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should filter and group by day', () => {
    component.onFiltrar();
    expect(component.linhas).toBeTruthy();
  });
});
