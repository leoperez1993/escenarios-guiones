import { useMemo, useState } from "react";
import { Step } from "../interface/datasaved/Step";
import Steps from "../components/Steps";
import Action from "../components/Action";
import { AuxiliaryFunction } from "../interface/datasaved/AuxiliaryFunction";
import FunctionData from "../components/FunctionData";

export default function ViewCreteAuxiliaryFunction() {
  const [name, setName] = useState<string>("");
  const [params, setParams] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [steps, setSteps] = useState<Step[]>([]);
  const auxiliaryFunctionSaved: AuxiliaryFunction = useMemo(() => {
    return { name, params, description, steps };
  }, [name, params, description, steps]);

  return (
    <>
      <section className="col-12 text-center">
        <h2>Función Auxiliar</h2>
      </section>

      <section className="col-5 border-y-3 border-left-3 p-5">
        <div className="col-12">
          <FunctionData
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            params={params}
            setParams={setParams}
          />
        </div>
        <div className="col-12">
          <Action dataSaved={auxiliaryFunctionSaved} />
        </div>
      </section>
      <section className="col-7 border-y-3 border-right-3 p-5">
        <Steps steps={steps} setSteps={setSteps} />
      </section>
    </>
  );
}
