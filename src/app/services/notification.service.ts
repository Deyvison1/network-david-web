import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private readonly _snackBar: MatSnackBar) {}

  notificationSimple(msg: string) {
    this._snackBar.open(msg, 'OK', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  notificationComplet(msg: string, action: string, duration: number) {
    this._snackBar.open(msg, action, {
      duration: duration,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }
}
