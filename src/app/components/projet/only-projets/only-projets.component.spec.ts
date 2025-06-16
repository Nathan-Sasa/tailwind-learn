import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyProjetsComponent } from './only-projets.component';

describe('OnlyProjetsComponent', () => {
  let component: OnlyProjetsComponent;
  let fixture: ComponentFixture<OnlyProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlyProjetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
