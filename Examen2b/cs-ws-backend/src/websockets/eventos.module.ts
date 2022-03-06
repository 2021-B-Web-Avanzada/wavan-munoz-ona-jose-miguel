import {Module} from "@nestjs/common";
import {EventosGateway} from "./eventos.gateway";
import {AppService} from "../app.service";

@Module({
        providers: [
            EventosGateway
        ]
})

export class EventosModule{}