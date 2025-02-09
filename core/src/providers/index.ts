import { Completion } from "./utils/completion";
import { OpenAI } from "./openAI";
import { Ollama } from "./ollama";
import { ModelOptions, OpenAIModels, LocalModels } from "../types";

export class getModel {
  public static getProviderForModel(model: ModelOptions): Completion {
    if (Object.values(OpenAIModels).includes(model as OpenAIModels)) {
      return new OpenAI();
    }
    else if (Object.values(LocalModels).includes(model as LocalModels)) {
      return new Ollama();
    }

    throw new Error(`No provider found for model "${model}"`);
  }
}
