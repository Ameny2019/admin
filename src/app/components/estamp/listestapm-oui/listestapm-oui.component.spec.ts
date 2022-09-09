import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListestapmOuiComponent } from './listestapm-oui.component';

describe('ListestapmOuiComponent', () => {
  let component: ListestapmOuiComponent;
  let fixture: ComponentFixture<ListestapmOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListestapmOuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListestapmOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
