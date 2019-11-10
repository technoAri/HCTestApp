import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilePagePage } from './tile-page.page';

describe('TilePagePage', () => {
  let component: TilePagePage;
  let fixture: ComponentFixture<TilePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
