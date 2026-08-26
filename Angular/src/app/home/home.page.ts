import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alunos: any = [
    {nome:'trompete gordo', email:'gordaodaxj@gmail.com'};
    {nome:'vitor moggado', email:'moggadinho@gmail.com'}
  ];

  titulo:string = 'listagem de alunos';
  subtitulo: string = 'sistema integrado de gestão';

  constructor(){
    fetch('https//127.0.0.1:8000/aluno/index')
    .then(resp => resp.json())
    .them(resp => {
      this.alunos = resp
    })
    .catch(erro => {
      console.log(erro)
    })
    .finally(() =>{
      console.log("requisição finalizada!")
    })
  }


}
