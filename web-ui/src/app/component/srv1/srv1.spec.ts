import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Srv1 } from './srv1';

describe('Srv1', () => {
  let component: Srv1;
  let fixture: ComponentFixture<Srv1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Srv1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Srv1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
