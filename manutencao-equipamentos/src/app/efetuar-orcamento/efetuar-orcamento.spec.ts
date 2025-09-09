import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { EfetuarOrcamento } from './efetuar-orcamento';
import { FormsModule } from '@angular/forms';

describe('EfetuarOrcamento', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, EfetuarOrcamento],
      providers: [provideRouter([])], // substitui RouterTestingModule, vscode falo que n eh bao =(
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EfetuarOrcamento);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
