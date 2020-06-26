import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Phys101Page } from './phys101.page';

describe('Phys101Page', () => {
  let component: Phys101Page;
  let fixture: ComponentFixture<Phys101Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Phys101Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Phys101Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
