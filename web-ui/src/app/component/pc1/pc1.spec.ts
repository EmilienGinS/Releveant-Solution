import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pc1 } from './pc1';

describe('Pc1', () => {
  let component: Pc1;
  let fixture: ComponentFixture<Pc1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pc1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pc1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
