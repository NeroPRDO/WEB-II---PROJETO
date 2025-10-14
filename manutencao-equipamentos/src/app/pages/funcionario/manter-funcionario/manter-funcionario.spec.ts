import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterFuncionario } from './manter-funcionario';

describe('ManterFuncionario', () => {
  let component: ManterFuncionario;
  let fixture: ComponentFixture<ManterFuncionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManterFuncionario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManterFuncionario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
