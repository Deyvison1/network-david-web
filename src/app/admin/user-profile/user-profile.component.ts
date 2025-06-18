import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserDTO } from 'src/app/models/dto/user.dto';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  form: FormGroup;
  isUpdate: boolean = false;
  userLogado: UserDTO;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {
    this.findByLogin();
  }

  findByLogin() {
    this.userAuthService.decodeToken();
    this.userAuthService
      .findByLogin(this.userAuthService.decodedToken.sub)
      .subscribe({
        next: (value) => {
          this.userLogado = value;
          this.initForm();
        },
        error(err) {},
      });
  }

  initForm() {
    this.form = this.formBuilder.group({
      login: [this.userLogado.login],
      senha: [this.userLogado.senha],
      role: [this.userLogado.role],
      createdAt: [this.userLogado.createdAt],
      updatedAt: [this.userLogado.updatedAt],
    });
    this.form.disable();
  }
}
