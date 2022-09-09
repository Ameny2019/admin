import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefleurComponent } from './listefleur.component';

describe('ListefleurComponent', () => {
  let component: ListefleurComponent;
  let fixture: ComponentFixture<ListefleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListefleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
