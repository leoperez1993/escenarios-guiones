import { DataTable } from "primereact/datatable";
import { Column, ColumnEditorOptions, ColumnEvent } from "primereact/column";
import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Step } from "../interface/datasaved/Step";

export default function Steps({ steps, setSteps }: { steps: Step[]; setSteps: Dispatch<SetStateAction<Step[]>> }) {
  useEffect(() => {
    setSteps([{ id: 1, step: "Ingrese paso", result: "Ingrese resultado" }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addRow = () => {
    const newRow = { id: steps.length + 1, step: "Ingrese paso", result: "Ingrese resultado" };
    setSteps([...steps, newRow]);
  };

  const onCellEditComplete = (e: ColumnEvent) => {
    const { rowData, newValue, field, originalEvent: event } = e;

    switch (field) {
      case "step":
        rowData[field] = newValue;
        event.preventDefault();
        break;
      case "result":
        rowData[field] = newValue;
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  const cellEditor = (options: ColumnEditorOptions) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => options.editorCallback && options.editorCallback(e.target.value)}
        onKeyDown={(e) => e.stopPropagation()}
      />
    );
  };

  return (
    <div>
      <div className="flex justify-content-between">
        <div>
          <h3 className="m-0">Guión</h3>
        </div>
        <div>
          <Button tooltip="Agregar fila" tooltipOptions={{ position: "left" }} icon={"pi pi-plus-circle"} onClick={addRow} />
        </div>
      </div>
      <div className="my-2">
        <DataTable editMode="cell" value={steps}>
          <Column field="id" header="ID"></Column>
          <Column
            field="step"
            header="Paso funcional"
            editor={(options) => cellEditor(options)}
            onCellEditComplete={onCellEditComplete}
          ></Column>
          <Column
            field="result"
            header="Resultado"
            editor={(options) => cellEditor(options)}
            onCellEditComplete={onCellEditComplete}
          ></Column>
        </DataTable>
      </div>
      <div className="flex justify-content-end">
        <Button tooltip="Agregar fila" tooltipOptions={{ position: "left" }} icon={"pi pi-plus-circle"} onClick={addRow} />
      </div>
    </div>
  );
}
