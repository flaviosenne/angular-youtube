import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMommentComponent } from './new-momment.component';

describe('NewMommentComponent', () => {
  let component: NewMommentComponent;
  let fixture: ComponentFixture<NewMommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
