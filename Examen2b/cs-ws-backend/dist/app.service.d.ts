export declare class AppService {
    caracteres: string[];
    salas: {
        idSala: string;
        baraja: string;
        usuarios?: string[];
    }[];
    getHello(): string;
    generarNuevaSala(): string;
    comprobarSala(id: string): boolean;
    registrarSala(sala: {
        idSala: string;
        baraja: string;
        usuarios?: string[];
    }): void;
    consultarSala(idSala: string): {
        idSala: string;
        baraja: string;
        usuarios?: string[];
    };
    registrarUsuarioEnSala(idSala: string, nombreUsuario: string): void;
}
