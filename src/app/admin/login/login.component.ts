import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CredenciaisDTO } from 'src/app/models/dto/credentials';
import { User } from 'src/app/models/dto/user.dto';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { NotificationService } from 'src/app/services/notification.service';
import { RouterService } from 'src/app/services/router.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(
    private notificationService: NotificationService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private localStorageService: LocalStorageService,
    private router: RouterService,
    private authService: UserAuthService
  ) {}

  ngOnInit(): void {
    /**/
  }

  isLogado(): boolean {
    if (
      this.localStorageService.getItem('token')
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
      router = '/home-admin';
    } else {
      msg = 'Não autorizado';
    }
    this.notification(msg);
    this.redirectionTo(router);
    this.cancel();
  }


  notification(msg: string) {
    this.notificationService.notificationSimple(msg);
  }

  redirectionTo(router: string) {
    if(router != '') {
      this.router.redirectionTo(router);
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  btnEntrar() {
    this.redirectionTo('home-admin');
    this.cancel();
  }

  verificationLogin(): boolean {
    const req = Object.assign({
      login: this.model.name, senha: this.model.senha
    });

    this.authService.getToken(req).subscribe(
      (res: any) => {
        console.log(res);
        if(res.token) {
          this.localStorageService.setItem('token', res.token);
          return true;
        } else {
          return false;
        }
      }, err => {
        return false;
      }
    );
    return true;
  }
}
