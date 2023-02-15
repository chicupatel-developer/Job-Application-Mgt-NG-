import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSkillsComponent } from './create-skills.component';

describe('CreateSkillsComponent', () => {
  let component: CreateSkillsComponent;
  let fixture: ComponentFixture<CreateSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
