import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  saveUserData(user: User): void {
    this.db.list(environment.userPath).push(user);
  }

  deleteUserData(id: string): void {
    this.db.list(environment.userPath).remove(id);
  }
}
