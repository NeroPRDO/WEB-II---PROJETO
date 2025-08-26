import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAtendimento } from './cadastro-atendimento';

describe('CadastroAtendimento', () => {
  let component: CadastroAtendimento;
  let fixture: ComponentFixture<CadastroAtendimento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroAtendimento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAtendimento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
