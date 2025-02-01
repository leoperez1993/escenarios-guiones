import { ReactNode } from "react";
import Menu from "../components/Menu";
import { Menubar } from "primereact/menubar";

declare const __APP_VERSION__: string;
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex align-content-between flex-wrap h-screen">
      <header className="p-1 align-items-center w-screen justify-content-center">
        <Menu />
      </header>

      <main className="align-items-center w-screen justify-content-center">
        <div className="grid m-2">{children}</div>
      </main>

      <footer className="p-1 align-items-center w-screen justify-content-center text-right">
        <Menubar
          start={<span>Desarrollador: Leonardo Pérez | lperez@ces.com.uy</span>}
          end={
            <span>
              Versión: <strong>{__APP_VERSION__}</strong>
            </span>
          }
        />
      </footer>
    </div>
  );
}
