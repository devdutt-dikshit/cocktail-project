import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineappComponent } from './wineapp.component';

describe('WineappComponent', () => {
  let component: WineappComponent;
  let fixture: ComponentFixture<WineappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
