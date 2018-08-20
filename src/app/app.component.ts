import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDdbCST2yL0Q3q9gkQDUwoaLQG2TSaONxA",
    authDomain: "app-book-angular.firebaseapp.com",
    databaseURL: "https://app-book-angular.firebaseio.com",
    projectId: "app-book-angular",
    storageBucket: "app-book-angular.appspot.com",
    messagingSenderId: "667162751049"
  };
  firebase.initializeApp(config);
  }
}
