import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrasilPage } from './brasil.page';

describe('BrasilPage', () => {
  let component: BrasilPage;
  let fixture: ComponentFixture<BrasilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrasilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
