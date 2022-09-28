import { Manufacturer } from "../../models/manufacturer";

export interface ManufacturerRepositoryInterface {
    save(manufacturer: Manufacturer): boolean;
}