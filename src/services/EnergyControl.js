import { apiConnection } from "./ApiResponse";

export const getRegisterEnergy = () => {
    const response = apiConnection(
        'list-control-energy',
        null,
        null
    )

    return response
}