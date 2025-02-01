import { Step } from "./Step";

export interface Scenario {
  id?: string;
  name: string;
  description: string;
  precondition: string[];
  steps: Step[];
}
