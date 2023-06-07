import { BaseTreatment } from "./BaseTreatment";
import { Call } from "./call";

export class RefoundTreatment extends BaseTreatment{
    Treat(call: Call): Call {
        if (call.option == 2){
            console.dir("Refound Treatment.");
            call.solved = true;
            return call;
        }
        return super.Treat(call);
    }
}