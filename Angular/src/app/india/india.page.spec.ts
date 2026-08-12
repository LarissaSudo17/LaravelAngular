import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndiaPage } from './india.page';

describe('IndiaPage', () => {
  let component: IndiaPage;
  let fixture: ComponentFixture<IndiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IndiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
