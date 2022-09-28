import { Manufacturer, ManufacturerProps } from "../models/manufacturer";
import { ManufacturerRepositoryInterface } from "../repository/interface/manufacturer";

export class ManufacturerSaveUseCase {
    constructor(private manufacturerRepository: ManufacturerRepositoryInterface) {}

    execute(props: ManufacturerProps): Manufacturer
    {
        let manufacturer = new Manufacturer(props);

        let hasSaved = this.manufacturerRepository
            .save(manufacturer);

        if (!hasSaved) {
            throw new Error("Produtor não salvo");
        }

        return manufacturer;
    }
}