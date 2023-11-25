import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListreorderPage } from './listreorder.page';

describe('ListreorderPage', () => {
  let component: ListreorderPage;
  let fixture: ComponentFixture<ListreorderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListreorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
