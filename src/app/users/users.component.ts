import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Browser } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  position: number = 1;
  action: string = 'insert;'

  usersList: Array<User> = [];

  sex = ['Mujer', 'Hombre',
            'No binario', 'No me identifico con ninguno de los descritos'];

  currentUser: User = {
    name: '',
    surname: '',
    age: 0,
    dni: '',
    bday: new Date(),
    favColor : '',
    sex : ''
  };

  registerUser( form=NgForm ):void {
    if (this.action === 'insert') {
     
        this.usersList.push(this.currentUser)
        this.currentUser = {
          name: '',
          surname: '',
          age: 0,
          dni: '',
          bday: new Date(),
          favColor : '',
          sex : ''
        
    }
    } else {
      this.usersList[this.position] = this.currentUser;
      this.action = 'insert';
    }
    this.currentUser ={
         name: '',
          surname: '',
          age: 0,
          dni: '',
          bday: new Date(),
          favColor : '',
          sex : ''
    }
  }

  constructor() { }

  ngOnInit() {
  }

  deleteUser(indexPosition: number) : void {
    this.usersList.splice(indexPosition,1)

  }

  updateUser(indexPosition: number): void {
    this.currentUser = this.usersList[indexPosition];
    this.action = "update";
    this.position = indexPosition;
  }

}