import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // méthode permettant de créer un nouvel utilisateur 
  createNewUser(email:string, password: string) {
    return new Promise(
      (resolve, reject) => {
        // Toutes les méthodes liées à l'authentification Firebase se trouvent dans  firebase.auth()
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error); 
          }
        );
      }
    );
  }

  // méthode permettant de connecter un utilisateur existant
  signInUser(email:string, password:string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // méthode permettant la déconnexion de l'utilisateur
  signOutUser() {
    firebase.auth().signOut();
  }
}
