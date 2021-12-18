import {Injectable} from "@angular/core";


@Injectable()
export class AuthService{
  estaLogueado = false;

  roles = [
    'admin',
    'supervisor',
    'usuario'
  ]
}
