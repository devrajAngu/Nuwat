import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmanMessComponent } from './chairman-mess.component';

describe('ChairmanMessComponent', () => {
  let component: ChairmanMessComponent;
  let fixture: ComponentFixture<ChairmanMessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChairmanMessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChairmanMessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
