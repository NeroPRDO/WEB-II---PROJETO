import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAprovadas } from './lista-aprovadas';

describe('ListaAprovadas', () => {
  let component: ListaAprovadas;
  let fixture: ComponentFixture<ListaAprovadas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAprovadas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAprovadas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
