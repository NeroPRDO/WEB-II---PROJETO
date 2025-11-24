import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuOrcamento } from './visu-orcamento';

describe('VisuOrcamento', () => {
  let component: VisuOrcamento;
  let fixture: ComponentFixture<VisuOrcamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisuOrcamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisuOrcamento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
