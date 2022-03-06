import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getSala(): {
        idSala: string;
    };
    verificarSala(params: any): {
        validez: boolean;
    };
    crearSala(valor: any): void;
    consultarSala(params: any): {
        sala: {
            idSala: string;
            baraja: string;
        };
    };
}
