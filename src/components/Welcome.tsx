import { Card } from "primereact/card";
import { Fieldset } from "primereact/fieldset";

export default function Welcome() {
  return (
    <div className="col-7 mx-auto">
      <Card
        title="Escenarios | Guiones | Funciones auxiliares"
        subTitle="Herramienta para el manejo de guiones y datos referentes"
      >
        <div className="grid">
          <div className="col-12">
            <Fieldset legend="Escenarios" toggleable collapsed>
              <p className="m-0">Los escenarios son conjuntos estructurados de pruebas. Componentes clave:</p>
              <ul className="mt-2 mb-3">
                <li>
                  <strong>Nombre:</strong> Identificador único y descriptivo.
                </li>
                <li>
                  <strong>Descripción:</strong> Resumen del propósito y alcance del escenario.
                </li>
                <li>
                  <strong>Precondiciones:</strong> Estado inicial requerido para ejecutar el escenario.
                </li>
                <li>
                  <strong>Pasos funcionales:</strong> Secuencia de acciones y verificaciones a realizar.
                </li>
              </ul>
              <p className="m-0">
                Los escenarios ayudan a organizar y ejecutar pruebas de manera sistemática, asegurando una cobertura completa de
                la funcionalidad.
              </p>
            </Fieldset>
          </div>
          <div className="col-12">
            <Fieldset legend="Guiones" toggleable collapsed>
              <p className="m-0">Los guiones son pasos funcionales con un resultado esperado. Características principales:</p>
              <ul className="mt-2 mb-3">
                <li>Describen acciones específicas a realizar.</li>
                <li>Incluyen el resultado esperado de cada acción.</li>
                <li>Pueden contener llamados a funciones auxiliares.</li>
                <li>Son parte fundamental de los escenarios de prueba.</li>
              </ul>
            </Fieldset>
          </div>
          <div className="col-12">
            <Fieldset legend="Funciones Auxiliares" toggleable collapsed>
              <p className="m-0">
                Las funciones auxiliares son componentes reutilizables que facilitan la ejecución de tareas específicas. Detalles
                importantes:
              </p>
              <ul className="mt-2 mb-3">
                <li>
                  <strong>Nombre:</strong> Identificador único para la función.
                </li>
                <li>
                  <strong>Parámetros:</strong> Datos de entrada necesarios para la función.
                </li>
                <li>
                  <strong>Descripción:</strong> Explicación del propósito y uso de la función.
                </li>
                <li>
                  <strong>Pasos funcionales:</strong> Secuencia de acciones que realiza la función.
                </li>
                <li>
                  <strong>Resultado:</strong> Salida esperada tras la ejecución de la función.
                </li>
              </ul>
              <p className="m-0">
                Las funciones auxiliares permiten modularizar y simplificar el código, mejorando la mantenibilidad y
                reutilización.
              </p>
            </Fieldset>
          </div>
        </div>
      </Card>
    </div>
  );
}
