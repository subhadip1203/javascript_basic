import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpreqComponent } from './httpreq.component';

describe('HttpreqComponent', () => {
  let component: HttpreqComponent;
  let fixture: ComponentFixture<HttpreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
