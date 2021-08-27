
import { environment } from "src/environments/environment";

export const BASE_URL = environment.apiUrl;
export const APIS = {
  APP_SETTING: `${BASE_URL}/v1/projects`,
  NOTE_LIST: `${BASE_URL}/v1/tasks`,
}