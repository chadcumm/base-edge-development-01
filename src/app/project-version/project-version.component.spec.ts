import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectVersionComponent } from './project-version.component';

describe('ProjectVersionComponent', () => {
  let component: ProjectVersionComponent;
  let fixture: ComponentFixture<ProjectVersionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectVersionComponent]
    });
    fixture = TestBed.createComponent(ProjectVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
