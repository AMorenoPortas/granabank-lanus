"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Bell,
  Home,
  FileText,
  LogOut,
  ArrowUpDown,
  ArrowDown,
  ArrowUp,
} from "lucide-react";
import MovimientoItem from "../components/ui/MovimientosItem";
import { useRouter } from "next/navigation";
import { getMovimientosAPI } from "../api";

type Movimiento = {
  id: number;
  nombre: string;
  descripcion: string;
  monto: number;
  tipo: string;
};

function getColor(tipo: string) {
  if (tipo === "recibido") return { color: "#7A1D2D", iconColor: "rgba(122, 29, 45, 0.20)" };
  if (tipo === "enviado") return { color: "#EF9C55", iconColor: "#FEEAD4" };
  return { color: "#B946FF", iconColor: "#F3E4FF" };
}

function getIcono(tipo: string, color: string) {
  if (tipo === "recibido") return <ArrowDown size={18} color={color} />;
  if (tipo === "enviado") return <ArrowUp size={18} color={color} />;
  return <ArrowUpDown size={18} color={color} />;
}

export default function HomePage() {
  const router = useRouter();
  const [movimientos, setMovimientos] = useState<Movimiento[]>([]);

  useEffect(() => {
    getMovimientosAPI(1).then((data) => {
      setMovimientos(data.slice(0, 4));
    });
  }, []);

  return (
    <main
      className="min-h-screen flex flex-col items-center"
      style={{ backgroundColor: "#F9FAFC" }}
    >
      {/* Header */}
      <div className="w-full max-w-sm px-6">
        <div className="flex justify-between items-center pt-10 pb-4">
          <div>
            <p style={{ fontSize: "16px", color: "#616E7C", fontWeight: 500 }}>
              Hola
            </p>
            <p style={{ fontSize: "22px", color: "#334154", fontWeight: 600 }}>
              Granate
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/movimientos")}
            >
              <Search size={17} color="#616E7C" />
            </div>
            <Bell size={16} color="#616E7C" />
          </div>
        </div>
      </div>

      {/* Tarjeta */}
      <div className="w-full max-w-sm px-6">
        <div
          className="rounded-3xl p-6"
          style={{
            backgroundColor: "#7A1D2D",
            boxShadow: "0px 8px 30px rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex justify-between items-center">
            <p style={{ fontSize: "14px", color: "#FFFFFF", fontWeight: 400 }}>
              Balance
            </p>
            <div style={{ position: "relative", width: "40px", height: "25px" }}>
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  backgroundColor: "#E9231A",
                  position: "absolute",
                  left: 0,
                }}
              />
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  backgroundColor: "#E99418",
                  opacity: 0.8,
                  position: "absolute",
                  left: "15px",
                }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div
              className="flex items-center justify-center px-2"
              style={{
                background: "linear-gradient(to right, #F3E4FF, #F5BC00)",
                borderRadius: "6px",
                height: "30px",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: 500, color: "#FFFFFF" }}>
                USD
              </span>
            </div>
            <span style={{ fontSize: "22px", fontWeight: 500, color: "#FFFFFF" }}>
              978.85
            </span>
          </div>

          <div
            className="mt-4"
            style={{
              fontSize: "22px",
              fontWeight: 500,
              color: "#FFFFFF",
              letterSpacing: "2px",
            }}
          >
            **** **** **** 1234
          </div>

          <div className="flex justify-between items-end mt-4">
            <p style={{ fontSize: "16px", fontWeight: 400, color: "#FFFFFF" }}>
              Soy Granate
            </p>
            <div className="flex flex-col items-end">
              <p style={{ fontSize: "10px", fontWeight: 400, color: "#FFFFFF" }}>
                Exp. Date
              </p>
              <p style={{ fontSize: "13px", fontWeight: 400, color: "#FFFFFF" }}>
                02/30
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Últimos movimientos */}
      <div className="w-full max-w-sm px-6 mt-6">
        <p style={{ fontSize: "20px", fontWeight: 500, color: "#334154" }}>
          Últimos movimientos
        </p>
        <div className="flex flex-col gap-3 mt-4">
          {movimientos.map((mov) => {
            const { color, iconColor } = getColor(mov.tipo);
            return (
              <MovimientoItem
                key={mov.id}
                nombre={mov.nombre}
                descripcion={mov.descripcion}
                monto={`$${mov.monto}`}
                color={color}
                iconColor={iconColor}
                icono={getIcono(mov.tipo, color)}
              />
            );
          })}
        </div>
      </div>

      {/* Barra de navegación */}
      <div
        className="w-full flex justify-center items-center gap-24 mt-auto py-4"
        style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #F0F0F0" }}
      >
        <div>
          <Home size={27} color="#7A1D2D" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/movimientos")}
        >
          <FileText size={27} color="#071529" />
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/login")}
        >
          <LogOut size={27} color="#071529" />
        </div>
      </div>
    </main>
  );
}