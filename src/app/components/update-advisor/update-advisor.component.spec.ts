import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdvisorComponent } from './update-advisor.component';

describe('UpdateAdvisorComponent', () => {
  let component: UpdateAdvisorComponent;
  let fixture: ComponentFixture<UpdateAdvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAdvisorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
