import { Injectable, InternalServerErrorException } from "@nestjs/common";
import axios from 'axios'
import { FishPredictionResponse } from "../interfaces/http-response-ml";

@Injectable()
export class GatewayMlRepository {
    constructor() { }

    async httpPostPredictionFish(file: Express.Multer.File): Promise<FishPredictionResponse> {
        const url: string = `${process.env.ML_API_URL}/prediction`
        const formData = new FormData();
        const blob = new Blob([file.buffer], { type: file.mimetype });
        formData.append('file', blob, file.originalname);

        let detectionResult: FishPredictionResponse

        await axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        }).then((res) => {
            detectionResult = res.data
        }).catch((err) => {
            console.log(err)
            throw new InternalServerErrorException("Server Machine Learning Error")
        })

        return detectionResult
    }
}
