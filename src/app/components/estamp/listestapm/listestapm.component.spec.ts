import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListestapmComponent } from './listestapm.component';

describe('ListestapmComponent', () => {
  let component: ListestapmComponent;
  let fixture: ComponentFixture<ListestapmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListestapmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListestapmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
