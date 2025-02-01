import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";
import { Chips, ChipsChangeEvent } from "primereact/chips";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  name: string;
  description: string;
  precondition: string[];
  setName: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setPrecondition: Dispatch<SetStateAction<string[]>>;
}

export default function ScenarioData({ name, setName, description, setDescription, precondition, setPrecondition }: Props) {
  return (
    <div className="card p-fluid">
      <FloatLabel>
        <label htmlFor="labelName">Nombre</label>
        <InputText id="labelName" value={name} onChange={(e) => setName(e.target.value)} />
      </FloatLabel>

      <div className="my-5">
        <FloatLabel>
          <label htmlFor="labelDescription">Descripción</label>
          <InputTextarea
            id="labelDescription"
            value={description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
            rows={5}
            cols={30}
          />
        </FloatLabel>
      </div>

      <FloatLabel>
        <label htmlFor="labelPrecondition">Precondiciones</label>
        <Chips id="labelPrecondition" value={precondition} onChange={(e: ChipsChangeEvent) => setPrecondition(e.value || [])} />
      </FloatLabel>
    </div>
  );
}
