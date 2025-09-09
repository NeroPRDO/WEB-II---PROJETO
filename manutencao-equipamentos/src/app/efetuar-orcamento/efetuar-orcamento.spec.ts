import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EfetuarOrcamento } from './efetuar-orcamento';
import { FormsModule } from '@angular/forms';

describe('EfetuarOrcamento', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, EfetuarOrcamento],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EfetuarOrcamento);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
