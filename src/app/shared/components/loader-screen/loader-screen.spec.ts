import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderScreen } from './loader-screen';

describe('LoaderScreen', () => {
  let component: LoaderScreen;
  let fixture: ComponentFixture<LoaderScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
