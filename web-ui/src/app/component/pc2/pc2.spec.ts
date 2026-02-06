import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pc2 } from './pc2';

describe('Pc2', () => {
  let component: Pc2;
  let fixture: ComponentFixture<Pc2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pc2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pc2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
