import { Step } from "./Step";

export interface AuxiliaryFunction {
  id?: string;
  name: string;
  params: string[];
  description: string;
  steps: Step[];
}
