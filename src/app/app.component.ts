import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyDKeLAAgbJCw7wcwHQyXLejXazbfuR8uj8",
      authDomain: "bookactivity-89264.firebaseapp.com",
      databaseURL: "https://bookactivity-89264.firebaseio.com",
      projectId: "bookactivity-89264",
      storageBucket: "bookactivity-89264.appspot.com",
      messagingSenderId: "426359234149"
    };
    firebase.initializeApp(config);
  }
}
