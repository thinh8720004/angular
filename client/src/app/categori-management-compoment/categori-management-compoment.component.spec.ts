import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriManagementCompomentComponent } from './categori-management-compoment.component';

describe('CategoriManagementCompomentComponent', () => {
  let component: CategoriManagementCompomentComponent;
  let fixture: ComponentFixture<CategoriManagementCompomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriManagementCompomentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriManagementCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
