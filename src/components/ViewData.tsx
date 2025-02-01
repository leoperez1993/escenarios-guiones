import { Scenario } from "../interface/datasaved/Scenario";
import { AuxiliaryFunction } from "../interface/datasaved/AuxiliaryFunction";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ListBox } from "primereact/listbox";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Prop {
  dataSaved: Scenario[] | AuxiliaryFunction[];
  deleteFunction: (id: string) => void;
  tooltip: string;
  emptyMessage: string;
}
export default function ViewData({ dataSaved, deleteFunction, tooltip, emptyMessage }: Prop) {
  return (
    <>
      {dataSaved.map((data, index) => (
        <div className="col-4" key={index}>
          <div className=" m-2">
            <Card
              title={
                <div className="flex justify-content-between flex-wrap">
                  <div>{data.name}</div>
                  <div>
                    <Button
                      onClick={() => deleteFunction(data.id as string)}
                      size="large"
                      severity="danger"
                      tooltip={tooltip}
                      tooltipOptions={{ position: "left" }}
                      icon="pi pi-eraser"
                      rounded
                    />
                  </div>
                </div>
              }
            >
              <div className="grid">
                <div className="col-12">
                  <p className="mt-0">
                    <strong>Descripción:</strong>
                  </p>
                  <p>{data.description}</p>
                </div>
                <div className="col-12">
                  <p className="mt-0">
                    <strong>Precondición:</strong>
                  </p>
                  <ListBox
                    emptyMessage={emptyMessage}
                    options={"precondition" in data ? data.precondition : data.params}
                    className="w-full"
                  />
                </div>
                <div className="col-12">
                  <p className="mt-0">
                    <strong>Guión:</strong>
                  </p>
                  <DataTable value={data.steps}>
                    <Column field="id" header="ID"></Column>
                    <Column field="step" header="Acción"></Column>
                    <Column field="result" header="Resultado"></Column>
                  </DataTable>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ))}
    </>
  );
}
