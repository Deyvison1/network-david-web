import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  objectLoginSuccess = {
    name: 'David',
    senha: 'DoisUm',
  };

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {}

  ngOnInit(): void {
    /**/
  }

  isLogado(): boolean {
    if(this.getLocalStorage() === '123123asdas///123.,,p,pap12312') {
      return true;
    } else {
      return false;
    }
  }

  getLocalStorage() {
    return localStorage.getItem('logado');
  }

  login() {
    let msg = '';
    let router = '';
    if (this.verificationLogin()) {
      msg = 'Logado com sucesso';
      router = 'home-admin';
      this.saveLocalStorage();
    } else {
      msg = 'Não autorizado';
    }
    this.notification(msg);
    this.redirectionTo(router);
    this.cancel();
  }

  saveLocalStorage() {
    localStorage.setItem('logado', '123123asdas///123.,,p,pap12312');
  }

  notification(msg: string) {
    this._snackBar.open(msg);
  }

  redirectionTo(router: string) {
    this.router.navigateByUrl(router);    
  }

  cancel() {
    this.dialogRef.close();
  }

  btnEntrar() {
    this.redirectionTo('home-admin');
    this.cancel();
  }

  verificationLogin(): boolean {
    if (
      this.model.name === this.objectLoginSuccess.name &&
      this.model.senha === this.objectLoginSuccess.senha
    ) {
      return true;
    } else {
      return false;
    }
  }
}
