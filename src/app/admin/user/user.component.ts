import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserDTO } from 'src/app/models/dto/user.dto';
import { NotificationService } from 'src/app/services/notification.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { FormUtil } from 'src/app/utils/form.utils';
import { Requireds } from 'src/app/utils/requireds';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  form: FormGroup;
  users: UserDTO[] = [];
  openForm: boolean = false;
  editOrInsert: string = '';

  listRoles = [
    { role: 'ADMIN', view: 'Administrador' },
    { role: 'USER', view: 'Usuario' },
  ];

  constructor(
    private readonly userService: UserAuthService,
    private readonly notificationService: NotificationService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.form = FormUtil.buildForm(
      Object.keys(new UserDTO()),
      Requireds.requiredsUser
    );
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next(res: UserDTO[]) {
        this.users = res;
      },
      error(err) {},
      complete: () => {},
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1 === c2 : c1 === c2;
  }

  openFormMethod() {
    if (!this.openForm) {
      this.openForm = true;
    }
  }

  delete(userId) {
    this.userService.deleteUser(userId).subscribe({
      complete: () => {
        this.getUsers();
      },
      next: () => {
        this.notificationService.notificationComplet(
          'Deletado com sucesso',
          'OK',
          5000
        );
      },
      error: (err) => {
        this.notificationService.notificationComplet(
          'Falha ao deletar!',
          'OK',
          5000
        );
      },
    });
  }

  save() {
    const values = this.form.value;
    if (values.id) {
      this.updateUser(values);
    } else {
      this.addUser(values);
    }
  }

  addUser(user?: UserDTO) {
    this.userService.insertUser(user).subscribe({
      next: (res) => {
        this.notificationService.notificationComplet(
          'Cadastrado com sucesso',
          'OK',
          5000
        );
        this.getUsers();
      },
      error: (err) => {
        this.notificationService.notificationComplet(
          'Cadastro de usuario falhou!',
          'OK',
          5000
        );
      },
      complete: () => {},
    });
    this.defaultFormAdd();
  }

  editOrInsertMehtod(data?: UserDTO) {
    if (data) {
      this.openForm = true;
      this.editOrInsert = 'edit';
      this.form.patchValue(data);
    } else {
      this.editOrInsert = 'insert';
      this.openForm = true;
      this.form.reset();
    }
  }

  openDialogDeleteUser(userId: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        this.delete(userId);
        this.getUsers();
      }
    });
  }

  updateUser(user?: UserDTO) {
    this.userService.updateUser(user).subscribe({
      next: () => {
        this.getUsers();
        this.notificationService.notificationComplet(
          'Atualizado comm sucesso!',
          'OK',
          5000
        );
      },
      error: () => {
        this.notificationService.notificationComplet(
          'Atualização de usuario falhou!',
          'OK',
          5000
        );
      },
      complete: () => {},
    });
    this.defaultFormAdd();
  }

  defaultFormAdd() {
    this.form.reset();
    this.openForm = false;
  }
}
