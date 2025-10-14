import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterCategoria } from './manter-categoria';

describe('ManterFuncionario', () => {
  let component: ManterCategoria;
  let fixture: ComponentFixture<ManterCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManterCategoria]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ManterCategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
