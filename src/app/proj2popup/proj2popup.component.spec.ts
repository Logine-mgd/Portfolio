import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proj2popupComponent } from './proj2popup.component';

describe('Proj2popupComponent', () => {
  let component: Proj2popupComponent;
  let fixture: ComponentFixture<Proj2popupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proj2popupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proj2popupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
