import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proj3popupComponent } from './proj3popup.component';

describe('Proj3popupComponent', () => {
  let component: Proj3popupComponent;
  let fixture: ComponentFixture<Proj3popupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proj3popupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proj3popupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
