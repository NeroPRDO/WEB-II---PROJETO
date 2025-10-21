import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSelect } from './simple-select';

describe('SimpleSelect', () => {
  let component: SimpleSelect;
  let fixture: ComponentFixture<SimpleSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
