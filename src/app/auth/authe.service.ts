import * as firebase from 'firebase'
import {Router} from '@angular/router';
export class AutheService {
  constructor(
    private router:Router
  ){}
  token='';
  signUp(email:string,password:string){
    //console.log("SSSSSSSSSSSSSSSSSSSSSSSSs");
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(
      error => console.log(error)
    );
  }
  signIn(email:string,password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(
        //this.token=firebase.auth().currentUser.getIdToken();
      token => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken().then(
          (tok)=> this.token=tok
        );
      }
    ).catch(
      error =>console.log(error)
    );
  }
  getToken(){
    firebase.auth().currentUser.getIdToken().then(
      (tok)=> this.token=tok
    );
    return this.token;
  }
  isAuthenticated(){
    //console.log(this.token.length==0?'Empty':'Not Empty')
    return this.token!=null&&this.token.length!=0;
  }
  logout(){
    this.token=null;
  }
}
