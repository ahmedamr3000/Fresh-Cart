import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetilsComponent } from './detils.component';

describe('DetilsComponent', () => {
  let component: DetilsComponent;
  let fixture: ComponentFixture<DetilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetilsComponent]
    });
    fixture = TestBed.createComponent(DetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
