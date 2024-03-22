import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadMenuComponent } from './head-menu.component';

describe('HeadMenuComponent', () => {
  let component: HeadMenuComponent;
  let fixture: ComponentFixture<HeadMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
