import {Component, Input, OnInit} from '@angular/core';
import {Museo} from "../../servicios/http/interfaces/Museo";
import {ConexionBackendService} from "../../servicios/http/conexion-backend.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Obra} from "../../servicios/http/interfaces/Obra.";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-ruta-nueva-obra',
  templateUrl: './ruta-nueva-obra.component.html',
  styleUrls: ['./ruta-nueva-obra.component.scss']
})
export class RutaNuevaObraComponent implements OnInit {
  @Input()
  esParaEdicion:boolean = false;

  @Input()
  obraAEditar?:Obra;

  @Input()
  museoDeObra?:string;

  listaMuseos: Museo[] = []
  formGroup? : FormGroup;
  constructor(
    private readonly apiService:ConexionBackendService,
    private formBuilder:FormBuilder,
    private readonly router:Router,
    private dialogoError:MatSnackBar
  ) { }

  ngOnInit(): void {
    if(!this.esParaEdicion){
      this.cargarMuseos()
    }
    this.prepararForm()
  }

  cargarMuseos(){
    this.apiService.listarMuseos()
      .subscribe({
        next: (values)=>{
          this.listaMuseos = values
        }
      })
  }

  prepararForm(){
    if(!this.esParaEdicion){
      this.formGroup = this.formBuilder.group({
        idMuseo: new FormControl('',[
          Validators.required
        ]),
        idObra: new FormControl('',[
          Validators.required
        ]),
        nombreObra: new FormControl('',[
          Validators.required
        ]),
        nombreAutor: new FormControl('',[
          Validators.required
        ]),
        descripcion: new FormControl('',[
          Validators.required
        ]),
        precio: new FormControl('',[
          Validators.required,
          Validators.min(0)
        ]),
        enExpo: new FormControl({
          value:false,
          disabled:false
        },[
          Validators.required
        ])
      });
    }
    else{
      this.formGroup = this.formBuilder.group({
        idMuseo: new FormControl({
          value: this.museoDeObra,
          disabled:true
        },[
          Validators.required
        ]),
        idObra: new FormControl({
          value:this.obraAEditar?.id,
          disabled:true
        },[
          Validators.required
        ]),
        nombreObra: new FormControl({
          value:this.obraAEditar?.nombre,
          disabled:true
        },[
          Validators.required
        ]),
        nombreAutor: new FormControl({
          value:this.obraAEditar?.autor,
          disabled:true
        }
        ,[
          Validators.required
        ]),
        descripcion: new FormControl({
          value:this.obraAEditar?.descripcion,
          disabled:false
        },[
          Validators.required
        ]),
        precio: new FormControl({
          value:this.obraAEditar?.precio,
          disabled:false
        }
        ,[
          Validators.required,
          Validators.min(0)
        ]),
        enExpo: new FormControl({
          value:this.obraAEditar?.enExposicion,
          disabled:false
        },[
          Validators.required
        ])
      });
    }

  }

  extraerDatos(){
    if(this.formGroup){
      const idMuseo = this.formGroup.get('idMuseo');
      const idObra = this.formGroup.get('idObra');
      const nombreObra = this.formGroup.get('nombreObra');
      const nombreAutor = this.formGroup.get('nombreAutor');
      const descripcion = this.formGroup.get('descripcion');
      const precio = this.formGroup.get('precio');
      const enExpo = this.formGroup.get('enExpo');
      const notNull = idMuseo && idObra && nombreObra && nombreAutor && descripcion && precio && enExpo;
      if(notNull){
        const nuevaObra:Obra = {
          id: idObra?.value,
          descripcion: descripcion?.value,
          nombre: nombreObra?.value,
          precio: precio?.value,
          autor: nombreAutor?.value,
          enExposicion: enExpo?.value
        }
       return {
         idMuseo: idMuseo?.value,
         infoObra: nuevaObra}
      }
    }
    return undefined;
  }

  enviarObra(){
    const datosObra = this.extraerDatos()
    if(datosObra){
      if(!this.esParaEdicion){
        this.apiService.crearObra(datosObra.infoObra,datosObra.idMuseo)
          .subscribe({
            next: (value) => {
              this.router.navigate(['/museos'])
            },
            error: (error) => {
              this.dialogoError.open('Error: El id de la obra ya esta en uso', 'OK')
            }
          });
      }
      else{
        this.apiService.actualizarObraMuseo(this.museoDeObra!!,datosObra.infoObra)
          .subscribe({
            next: (data) =>{
              this.router.navigate(['/museos',this.museoDeObra!!,'obras']);
            },
            error: (error) => {
              this.dialogoError.open('Ocurrió un error, intente nuevamente', 'OK')
            }
          });
      }

    }
  }

}



