import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Math201Page } from './math201.page';

describe('Math201Page', () => {
  let component: Math201Page;
  let fixture: ComponentFixture<Math201Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Math201Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Math201Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
