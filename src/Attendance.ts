import { Call } from "./call";
import { SalesTreatment } from "./SalesTreatment";
import { RefoundTreatment } from "./RefoundTreatment";
import { OthersTreatment } from "./OthersTreatment";

export class Attendance {
    Treat(option: number){
        const treat = new SalesTreatment();

        treat.setNextTreatment(new RefoundTreatment()).setNextTreatment(new OthersTreatment())
        treat.Treat(new Call(option));
    }
}