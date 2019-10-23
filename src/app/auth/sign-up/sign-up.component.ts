import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AutheService} from '../authe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
@ViewChild('f',{static:false})signUpForm:NgForm;
  constructor(
    private authErvice:AutheService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
  }
  onSignUp(){
    this.authErvice.signUp(this.signUpForm.value.email,this.signUpForm.value.password);
    //this.router.navigate(['/recipes']);
  }
}
