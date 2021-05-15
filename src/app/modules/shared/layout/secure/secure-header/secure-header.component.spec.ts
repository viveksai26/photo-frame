import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureHeaderComponent } from './secure-header.component';

describe('PublicHeaderComponent', () => {
  let component: SecureHeaderComponent;
  let fixture: ComponentFixture<SecureHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecureHeaderComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
