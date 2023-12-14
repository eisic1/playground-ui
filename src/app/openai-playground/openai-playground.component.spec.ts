import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaiPlaygroundComponent } from './openai-playground.component';

describe('OpenaiPlaygroundComponent', () => {
  let component: OpenaiPlaygroundComponent;
  let fixture: ComponentFixture<OpenaiPlaygroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenaiPlaygroundComponent]
    });
    fixture = TestBed.createComponent(OpenaiPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
