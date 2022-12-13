import { Injectable } from '@angular/core';
import { Role } from '../models/role';
import { User } from '../models/user';
import { UserDatastoreService } from './user-datastore.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public roles: Role[] = [];

  constructor(private userDatastoreService: UserDatastoreService) { }

  public addUser(user: any) {
    var newUser = new User();
    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;
    newUser.username = user.email,
    newUser.password = user.password,
    newUser.confirmPassword = user.confirmPassword,
    newUser.email = user.email;
    newUser.roles = user.selectedRoles;

    return this.userDatastoreService.add(newUser)
  }

  public updateUser(userToEdit: User, user: any) {
    var role = new Role();
    role.name = "Doctor";
    this.roles.push(role);
    user.selectedRoles = this.roles;
    userToEdit.username = user.username;
    userToEdit.firstName = user.firstName;
    userToEdit.lastName = user.lastName;
    userToEdit.givenName = user.givenName;
    userToEdit.email = user.email;
    userToEdit.isEnabled = true;
    userToEdit.roles = user.selectedRoles;

    return this.userDatastoreService.update(userToEdit);
  }

  public listUsers(search: String) {
    return this.userDatastoreService.list(search);
  }

  public findById(id : number) {
    return this.userDatastoreService.findById(id);
  }

  public delete(id : number) {
    return this.userDatastoreService.delete(id);
  }
}
