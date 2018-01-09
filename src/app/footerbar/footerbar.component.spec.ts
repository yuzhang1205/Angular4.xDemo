/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterbarComponent } from './footerbar.component';

describe('FooterbarComponent', () => {
  let component: FooterbarComponent;
  let fixture: ComponentFixture<FooterbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
