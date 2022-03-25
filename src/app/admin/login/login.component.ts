import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { NotificationService } from 'src/app/services/notification.service';
import { RouterService } from 'src/app/services/router.service';

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
    private notificationService: NotificationService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private localStorageService: LocalStorageService,
    private router: RouterService
  ) {}

  ngOnInit(): void {
    /**/
  }

  isLogado(): boolean {
    if (
      this.localStorageService.getItem('logado') ===
      '123123asdas///123.,,p,pap12312'
    ) {
      return true;
    } else {
      return false;
    }
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
    this.localStorageService.setItem(
      'logado',
      '123123asdas///123.,,p,pap12312'
    );
  }

  notification(msg: string) {
    this.notificationService.notificationSimple(msg);
  }

  redirectionTo(router: string) {
    this.router.redirectionTo(router);
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
