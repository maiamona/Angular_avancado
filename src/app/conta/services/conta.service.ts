import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { BaseService } from 'src/app/generic-services/base.service';

@Injectable()
export class ContaService extends BaseService{
  constructor(private http: HttpClient){
    super();
  }

  registrarUsuario(usuario: Usuario): Observable<Usuario>{
let response = this.http
.post(this.UrlServiceV1 + 'nova-conta', usuario, this.ObterHeaderJson())
.pipe(
  // map(result =>{}),
  map(this.extractData),
catchError(this.serviceError));

return response;
  }

  login(usuario: Usuario){

  }
}
