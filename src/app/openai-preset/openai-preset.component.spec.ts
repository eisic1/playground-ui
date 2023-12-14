import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaiPresetComponent } from './openai-preset.component';

describe('OpenaiPresetComponent', () => {
  let component: OpenaiPresetComponent;
  let fixture: ComponentFixture<OpenaiPresetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenaiPresetComponent]
    });
    fixture = TestBed.createComponent(OpenaiPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
