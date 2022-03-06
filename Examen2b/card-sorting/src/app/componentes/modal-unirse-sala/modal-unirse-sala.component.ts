import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-unirse-sala',
  templateUrl: './modal-unirse-sala.component.html',
  styleUrls: ['./modal-unirse-sala.component.scss']
})
export class ModalUnirseSalaComponent implements OnInit {

  formGroup = this.fb.group({
    nombreUsuario: new FormControl('',[
      Validators.required
    ])
  });
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data:{idSala:string},
    private fb:FormBuilder,
    private enrutador:Router,
    public referenciaDialogo: MatDialogRef<ModalUnirseSalaComponent>
  ) { }

  ngOnInit(): void {
  }

  unirseSala(){
    const nombreNuevo = this.formGroup.get('nombreUsuario');
    if(nombreNuevo){
      this.referenciaDialogo.close()
      this.enrutador.navigate(['/juego',this.data.idSala,nombreNuevo.value]);
    }
  }
}
