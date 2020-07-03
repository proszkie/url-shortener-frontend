import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectToDesiredSiteComponent } from './redirect-to-desired-site.component';

describe('RedirectToDesiredSiteComponent', () => {
  let component: RedirectToDesiredSiteComponent;
  let fixture: ComponentFixture<RedirectToDesiredSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectToDesiredSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectToDesiredSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
