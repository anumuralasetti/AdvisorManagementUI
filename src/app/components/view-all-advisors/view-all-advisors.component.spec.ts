import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllAdvisorsComponent } from './view-all-advisors.component';

describe('ViewAllAdvisorsComponent', () => {
  let component: ViewAllAdvisorsComponent;
  let fixture: ComponentFixture<ViewAllAdvisorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAllAdvisorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllAdvisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
