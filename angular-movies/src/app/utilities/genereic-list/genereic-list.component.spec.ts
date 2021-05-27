import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereicListComponent } from './genereic-list.component';

describe('GenereicListComponent', () => {
  let component: GenereicListComponent;
  let fixture: ComponentFixture<GenereicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenereicListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenereicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
