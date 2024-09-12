import { dbUrl } from "~shared/lib";
import axios from "axios";

export const api = axios.create({ baseURL: dbUrl });
