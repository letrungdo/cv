import axios from "axios";
import { AXIOS_TIMEOUT_ERROR_MESSAGE } from "constants/api";
import { EnvConfig } from "services/envConfig";

const baseAxios = axios.create({
    baseURL: EnvConfig.apiUrl,
    timeout: EnvConfig.apiTimeout,
    timeoutErrorMessage: AXIOS_TIMEOUT_ERROR_MESSAGE,
});

export default baseAxios;
