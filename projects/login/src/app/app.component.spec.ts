import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserLoginComponent',  () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
         FormsModule,
         HttpClientTestingModule,
        
      ],
      declarations: [
        AppComponent,
        UserLoginComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'login'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('login');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('login');
  // });
  it('test a formgroup element count', () => {
    const fixture = TestBed.createComponent(UserLoginComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    // const el = null;
    // const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('.content span')?.textContent).toContain('login app is running!');
    const formElement = fixture.debugElement.nativeElement.querySelector('#loginForm');
    console.log(formElement)
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(1);
  });
});
