import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadorComponent } from './listador.component';

describe('ListadorComponent', () => {
  let component: ListadorComponent;
  let fixture: ComponentFixture<ListadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
