import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutroSwitch } from './outro-switch';

describe('OutroSwitch', () => {
  let component: OutroSwitch;
  let fixture: ComponentFixture<OutroSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutroSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutroSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
