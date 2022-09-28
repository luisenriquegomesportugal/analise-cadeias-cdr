import { Manufacturer } from "../models/manufacturer";
import { ManufacturerRepositoryInterface } from "./interface/manufacturer";

export class ManufacturerRepository implements ManufacturerRepositoryInterface {
    save(manufacturer: Manufacturer): boolean {
        // firebase.database()
        //     .ref('manufacturer')
        //     .push()
        //     .set(manufacturer);

        return true;
    }
}