import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CredenciaisDTO } from 'src/app/models/dto/credentials.dto';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { NotificationService } from 'src/app/services/notification.service';
import { RouterService } from 'src/app/services/router.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  model: any = {};

  constructor(
    private readonly notificationService: NotificationService,
    private readonly dialogRef: MatDialogRef<LoginComponent>,
    private readonly localStorageService: LocalStorageService,
    private readonly router: RouterService,
    private readonly authService: UserAuthService
  ) {}
  
  isLogado(): boolean {
    if (this.localStorageService.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  notification(msg: string) {
    this.notificationService.notificationSimple(msg);
  }

  redirectionTo(router: string) {
    if (router != '') {
      this.router.redirectionTo(router);
    }
  }

  cancel(isSuccess: boolean) {
    this.dialogRef.close(isSuccess);
  }

  btnEntrar() {
    this.redirectionTo('home-admin');
    this.cancel(true);
  }

  verificationLogin() {
    const req: CredenciaisDTO = {
      login: this.model.name,
      senha: this.model.senha,
    };

    this.authService.getToken(req).subscribe({
      complete: () => {},
      next: (res) => {
        if (res.token) {
          this.notification('Logado com sucesso.');
          this.cancel(true);
        }
      },
      error: (err) => {
        if (err.status == 401) {
          this.notification('Usuario e(ou) senha invalido.');
        }
        this.cancel(false);
      },
    });
  }
}
