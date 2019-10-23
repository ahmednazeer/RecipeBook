import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AutheService} from '../authe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('f',{static:false})signInForm:NgForm;
  constructor(
    private authErvice:AutheService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
  }
  onSignIn(){
    const email=this.signInForm.value.email;
    const password=this.signInForm.value.password;
    this.authErvice.signIn(email,password);

    //this.router.navigate(['/recipes']);
  }
}
