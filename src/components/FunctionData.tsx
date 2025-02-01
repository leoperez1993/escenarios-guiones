import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";

interface Props {
  name: string;
  description: string;
  params: string[];
  setName: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setParams: Dispatch<SetStateAction<string[]>>;
}

export default function FunctionData({ name, setName, description, setDescription, params, setParams }: Props) {
  return (
    <div className="card p-fluid">
      <FloatLabel>
        <label htmlFor="labelName">Nombre</label>
        <InputText id="labelName" value={name} onChange={(e) => setName(e.target.value)} />
      </FloatLabel>

      <div className="my-5">
        <FloatLabel>
          <label htmlFor="labelParams">Parametros</label>
          <Chips id="labelParams" value={params} onChange={(e: ChipsChangeEvent) => setParams(e.value || [])} />
        </FloatLabel>
      </div>

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
  );
}
