import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContainerItemComponent } from './list-container-item.component';

describe('ListContainerItemComponent', () => {
  let component: ListContainerItemComponent;
  let fixture: ComponentFixture<ListContainerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContainerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContainerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
