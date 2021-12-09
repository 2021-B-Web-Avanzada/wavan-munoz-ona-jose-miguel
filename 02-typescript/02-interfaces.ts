// 02-interfaces.ts
interface Usuario{
    nombre:string;
    apellido:string;
    edad?:number;
    sueldo?:number;
    casado:boolean | 0 |1;
    estado: 'AC'|'IN'|'BN';
    imprimirUsuario: (mensaje:string) => string|'BN';
    calcularImpuesto: (impuesto:number) => number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
    //calcularImpuesto parametro numero impuesto, sueldo + sueldo * impuesto
    //estadoActual no reciba parametros, ap af at
}

let user:Usuario = {
    nombre: 'Miguel',
    apellido: 'Munoz',
    edad: 22,
    sueldo: 53,
    casado: false,
    estado: "AC",
    imprimirUsuario: mensaje => {
        return `El mensaje es: ${mensaje}`;
    },
    calcularImpuesto: impuesto => {
        return this.sueldo + this.sueldo * impuesto
    },
    estadoActual: () =>{
        switch (this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
