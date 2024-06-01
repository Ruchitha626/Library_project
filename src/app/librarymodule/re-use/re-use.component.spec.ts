import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReUseComponent } from './re-use.component';

describe('ReUseComponent', () => {
  let component: ReUseComponent;
  let fixture: ComponentFixture<ReUseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReUseComponent]
    });
    fixture = TestBed.createComponent(ReUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
