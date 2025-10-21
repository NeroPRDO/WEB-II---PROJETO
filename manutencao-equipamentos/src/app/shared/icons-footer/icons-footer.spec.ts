import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsFooter } from './icons-footer';

describe('IconsFooter', () => {
  let component: IconsFooter;
  let fixture: ComponentFixture<IconsFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
