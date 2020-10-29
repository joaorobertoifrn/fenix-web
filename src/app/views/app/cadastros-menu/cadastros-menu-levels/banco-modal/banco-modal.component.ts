import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BancoService } from 'src/services/banco.service';
import { NotificationsService, NotificationType } from 'angular2-notifications';

@Component({
  selector: 'app-banco-modal',
  templateUrl: './banco-modal.component.html',
  styles: []
})
export class BancoModalComponent implements OnInit {
  formulario: FormGroup;
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-template'
  };

  @ViewChild('template', { static: true }) template: TemplateRef<any>;

  constructor(private modalService: BsModalService, private bancoService: BancoService) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      codigo: new FormControl(null, [Validators.required]),
      nome: new FormControl(null, [Validators.required]),
      url: new FormControl(null, [Validators.required]),
    });
  }

  show() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  onSubmit() {
    this.insert();

  }

  insert() {
    this.bancoService.insert(this.formulario.value).subscribe(
      response => {
        this.onSuccess();
        this.bancoService.getBancos();
      },
      error => {
        this.onError();
      }
    );
  }

  onSuccess() {

    //this.notifications.create('Sucesso', 'Banco cadastrado com Sucesso', NotificationType.Success, {timeOut: 1000, showProgressBar: false });
  }

  onError() {
    //this.notifications.create('Erro', 'Erro ao cadastrar o banco', NotificationType.Error, { timeOut: 1000, showProgressBar: false });
  }

}
