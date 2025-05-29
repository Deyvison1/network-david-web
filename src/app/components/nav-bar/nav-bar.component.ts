import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/admin/login/login.component';
import { AplicationNames } from 'src/app/utils/application-names';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  nameApplication = AplicationNames.SUPREME_NETWORK_TELECOM;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(LoginComponent, {
      width: '400px',
    });
  }
}
