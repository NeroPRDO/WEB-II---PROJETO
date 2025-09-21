import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoModal } from './novo-modal';

describe('NovoModal', () => {
  let component: NovoModal;
  let fixture: ComponentFixture<NovoModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
