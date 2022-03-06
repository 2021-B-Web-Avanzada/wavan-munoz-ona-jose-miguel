export declare class AppService {
    caracteres: string[];
    salas: {
        idSala: string;
        baraja: string;
    }[];
    getHello(): string;
    generarNuevaSala(): string;
    comprobarSala(id: string): boolean;
    registrarSala(sala: {
        idSala: string;
        baraja: string;
    }): void;
    consultarSala(idSala: string): {
        idSala: string;
        baraja: string;
    };
}
