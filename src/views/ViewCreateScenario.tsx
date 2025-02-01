import { useMemo, useState } from "react";
import { Step } from "../interface/datasaved/Step";
import ScenarioData from "../components/ScenarioData";
import Action from "../components/Action";
import Steps from "../components/Steps";
import { Scenario } from "../interface/datasaved/Scenario";

export default function ViewCreateScenario() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [precondition, setPrecondition] = useState<string[]>([]);
  const [steps, setSteps] = useState<Step[]>([]);
  const scenarioSaved: Scenario = useMemo(() => {
    return { name, description, precondition, steps };
  }, [name, description, precondition, steps]);

  return (
    <>
      <section className="col-12 text-center">
        <h2>Escenario</h2>
      </section>

      <section className="col-5 border-y-3 border-left-3 p-5">
        <div className="col-12">
          <ScenarioData
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            precondition={precondition}
            setPrecondition={setPrecondition}
          />
        </div>
        <div className="col-12">
          <Action dataSaved={scenarioSaved} />
        </div>
      </section>
      <section className="col-7 border-y-3 border-right-3 p-5">
        <Steps steps={steps} setSteps={setSteps} />
      </section>
    </>
  );
}
