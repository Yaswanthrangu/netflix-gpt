import { QWENAI_API_KEY } from "./constants";
import OpenAI from "openai";

const qwenai = new OpenAI(
    {
        apiKey: QWENAI_API_KEY,
        baseURL: "https://openrouter.ai/api/v1",
        dangerouslyAllowBrowser: true,
    }
);

export default qwenai;