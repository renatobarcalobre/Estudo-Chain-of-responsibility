import { BaseTreatment } from "./BaseTreatment";
import { Call } from "./call";

export class SalesTreatment extends BaseTreatment{
    Treat(call: Call): Call {
        if (call.option == 1){
            console.dir("Sales Treatment.");
            call.solved = true;
            return call;
        }
        return super.Treat(call);
    }
}