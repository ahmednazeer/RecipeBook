import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  itemType = 'recipe'

  onEventHandled(value) {
    this.itemType = value;
  }

  ngOnInit(): void {
    firebase.initializeApp(
      {
apiKey:'AIzaSyCv61E5-91gbrYaagxUyP_69m9vUEQRFvY',
authDomain:'ng-food-project.firebaseapp.com'
      }
    )
  }
}
