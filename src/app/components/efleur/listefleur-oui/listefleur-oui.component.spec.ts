import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefleurOuiComponent } from './listefleur-oui.component';

describe('ListefleurOuiComponent', () => {
  let component: ListefleurOuiComponent;
  let fixture: ComponentFixture<ListefleurOuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListefleurOuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefleurOuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
