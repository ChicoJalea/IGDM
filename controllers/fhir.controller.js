import { fhirModel } from "../models/BlogModel.js";

const getAll = async (_,res) => {
    try {
        const response = await fhirModel.buscarTodo();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
};

export const fhirController = {
    getAll,
};