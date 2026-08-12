import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RussiaPage } from './russia.page';

describe('RussiaPage', () => {
  let component: RussiaPage;
  let fixture: ComponentFixture<RussiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RussiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
