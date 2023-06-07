import { BaseTreatment } from "./BaseTreatment";
import { Call } from "./call";

export class OthersTreatment extends BaseTreatment{
    Treat(call: Call): Call {
        console.dir("Another treatment.");
        call.solved = true;
        return call;
    }
}