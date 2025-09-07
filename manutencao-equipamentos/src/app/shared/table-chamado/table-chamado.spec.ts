import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableChamado } from './table-chamado';

describe('TableChamado', () => {
  let component: TableChamado;
  let fixture: ComponentFixture<TableChamado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableChamado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableChamado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
