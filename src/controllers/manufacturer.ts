import { Request, Response } from "express";
import { ManufacturerRepository } from "../repository/manufacturer";
import { ManufacturerSaveUseCase } from "../usecases/manufacturerSave";

export default {
    save(req: Request, res: Response) {
        try {
            let {name, email} = req.body;

            let manufacturerRepository = new ManufacturerRepository();
            let manufacturerSave = new ManufacturerSaveUseCase(manufacturerRepository);
    
            let manufacturer = manufacturerSave.execute({name, email});
    
            return res.json({
                message: "Produtor cadastrado com sucesso",
                manufacturer
            });
        }
        catch (e) {
            return res.json({
                message: e.message,
                error: true
            });
        }
    }
}