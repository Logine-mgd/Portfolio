import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proj1popupComponent } from './proj1popup.component';

describe('Proj1popupComponent', () => {
  let component: Proj1popupComponent;
  let fixture: ComponentFixture<Proj1popupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proj1popupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proj1popupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
