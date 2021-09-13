import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  loading: boolean;

  constructor(
    private formBuild: FormBuilder,
    private router: Router
  ) 
  {
    this.loading = false;
    this.formLogin = new FormGroup({});
  }

  ngOnInit(): void
  {
    this.formLogin = this.formBuild.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })

  }
  
  @HostListener('submit')
  onSubmit()
  {
    this.loading = true;
    if(this.formLogin.valid)
    {
      setTimeout(() => { 
        this.loading = false;
        this.router.navigate(['/']);
      }, 10000)
    }else
      this.loading = false;
  }
}
