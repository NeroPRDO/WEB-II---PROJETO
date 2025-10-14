import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Orcamento } from './orcamento';

describe('Orcamento', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, Orcamento]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Orcamento);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
