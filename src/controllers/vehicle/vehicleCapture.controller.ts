import { Request, Response } from "express"
import { handleError } from "../../errors/appError"
import vehicleCaptureService from "../../services/vehicle/vehicleCapture.service"


const vehicleCaptureController = async (req: Request, res: Response) => {
    try {
        const { vehicleId } = req.params

        const response = await vehicleCaptureService(vehicleId)

        return res.json(response)
    } catch (err) {
        if (err instanceof Error) {
            handleError(err, res)
        }
    }
}

export default vehicleCaptureController