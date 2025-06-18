import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/admin/login/login.component';
import { UserDTO } from 'src/app/models/dto/user.dto';
import { NotificationService } from 'src/app/services/notification.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { AplicationNames } from 'src/app/utils/application-names';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  nameApplication = AplicationNames.SUPREME_NETWORK_TELECOM;
  isLoggedIn: boolean = false;
  userLogado: UserDTO;

  constructor(
    public readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly notificationService: NotificationService,
    private readonly userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    this.loggedIn();
  }

  findByLogin() {
    this.userAuthService.decodeToken();
    this.userAuthService
      .findByLogin(this.userAuthService.decodedToken.sub)
      .subscribe({
        next: (value) => {
          this.userLogado = value;
        },
        error(err) {},
      });
  }

  openDialogLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  loggedIn() {
    let isLoggedIn = !!localStorage.getItem('token');
    this.isLoggedIn = isLoggedIn;
    if (this.isLoggedIn) {
      this.findByLogin();
    }
  }

  login() {
    this.openDialogLogin();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/home');
    this.loggedIn();
    this.notificationService.notificationSimple('Deslogado com sucesso!');
  }

  openProfile() {
    this.router.navigateByUrl('/user-profile');
  }
}
