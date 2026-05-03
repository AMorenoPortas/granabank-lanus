"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Home,
  FileText,
  LogOut,
  ArrowUpDown,
  ArrowDown,
  ArrowUp,
} from "lucide-react";
import MovimientoItem from "../components/ui/MovimientosItem";

const movimientosData = [
  {
    id: 1,
    nombre: "Adobe",
    descripcion: "Pago de suscripción",
    monto: "$125",
    tipo: "suscripcion",
    color: "#B946FF",
    iconColor: "#F3E4FF",
  },
  {
    id: 2,
    nombre: "José Suárez",
    descripcion: "Pago recibido",
    monto: "$95",
    tipo: "recibido",
    color: "#7A1D2D",
    iconColor: "rgba(122, 29, 45, 0.20)",
  },
  {
    id: 3,
    nombre: "Figma",
    descripcion: "Pago de suscripción",
    monto: "$125",
    tipo: "suscripcion",
    color: "#B946FF",
    iconColor: "#F3E4FF",
  },
  {
    id: 4,
    nombre: "Juan Rodríguez",
    descripcion: "Pago enviado",
    monto: "$95",
    tipo: "enviado",
    color: "#EF9C55",
    iconColor: "#FEEAD4",
  },
  {
    id: 5,
    nombre: "Julio César",
    descripcion: "Pago recibido",
    monto: "$95",
    tipo: "recibido",
    color: "#7A1D2D",
    iconColor: "rgba(122, 29, 45, 0.20)",
  },
  {
    id: 6,
    nombre: "Mariano Martinez",
    descripcion: "Pago enviado",
    monto: "$95",
    tipo: "enviado",
    color: "#EF9C55",
    iconColor: "#FEEAD4",
  },
];

function getIcono(tipo: string, color: string) {
  if (tipo === "recibido") return <ArrowDown size={18} color={color} />;
  if (tipo === "enviado") return <ArrowUp size={18} color={color} />;
  return <ArrowUpDown size={18} color={color} />;
}

type Filtro = "todos" | "debito" | "recibido" | "enviado";

export default function MovimientosPage() {
  const router = useRouter();
  const [filtroActivo, setFiltroActivo] = useState<Filtro>("todos");
  const [busqueda, setBusqueda] = useState("");

  const movimientosFiltrados = movimientosData.filter((mov) => {
    const coincideBusqueda =
      mov.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      mov.descripcion.toLowerCase().includes(busqueda.toLowerCase());

    const coincideFiltro =
      filtroActivo === "todos" ||
      (filtroActivo === "recibido" && mov.tipo === "recibido") ||
      (filtroActivo === "enviado" && mov.tipo === "enviado") ||
      (filtroActivo === "debito" && mov.tipo === "suscripcion");

    return coincideBusqueda && coincideFiltro;
  });

  const filtros: { key: Filtro; label: string }[] = [
    { key: "todos", label: "Todos" },
    { key: "debito", label: "Debito Aut." },
    { key: "recibido", label: "Recibido" },
    { key: "enviado", label: "Enviado" },
  ];

  return (
    <main
      className="flex flex-col items-center min-h-screen"
      style={{ backgroundColor: "#F5F5F5", fontFamily: "Poppins, sans-serif" }}
    >
      <div className="w-full max-w-sm px-6 pt-8 pb-4">
        <p style={{ fontSize: "20px", fontWeight: 500, color: "#334154" }}>
          Movimientos
        </p>

        {/* Buscador */}
        <div
          className="flex items-center gap-3 mt-4 px-4"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            height: "60px",
            boxShadow: "0px 8px 30px 0px rgba(0,0,0,0.06)",
          }}
        >
          <Search size={16} color="#AAAAAA" />
          <input
            type="text"
            placeholder="Ingresa un nombre o servicio"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              fontSize: "12px",
              fontWeight: 500,
              color: "#334154",
              fontFamily: "Poppins, sans-serif",
              backgroundColor: "transparent",
              width: "100%",
            }}
          />
        </div>

        {/* Filtros */}
        <div
          className="flex gap-2 mt-4 pb-2 hide-scrollbar"
          style={{ overflowX: "auto", maxWidth: "100%" }}
        >
          {filtros.map((filtro) => {
            const estaActivo = filtroActivo === filtro.key;
            return (
              <button
                key={filtro.key}
                onClick={() => setFiltroActivo(filtro.key)}
                style={{
                  backgroundColor: estaActivo ? "#7A1D2D" : "#FFFFFF",
                  color: estaActivo ? "#FFFFFF" : "#334154",
                  border: "none",
                  borderRadius: "16px",
                  padding: "10px 16px",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  fontFamily: "Poppins, sans-serif",
                  transition: "background-color 0.2s ease, color 0.2s ease",
                }}
              >
                {filtro.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lista de movimientos */}
      <div className="w-full max-w-sm px-6 mt-4 flex flex-col gap-3 pb-24">
        {movimientosFiltrados.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-16 gap-3">
            <p style={{ color: "#AAAAAA", fontSize: "14px", fontWeight: 500 }}>
              No se encontraron movimientos
            </p>
          </div>
        ) : (
          movimientosFiltrados.map((mov) => (
            <MovimientoItem
              key={mov.id}
              nombre={mov.nombre}
              descripcion={mov.descripcion}
              monto={mov.monto}
              color={mov.color}
              iconColor={mov.iconColor}
              icono={getIcono(mov.tipo, mov.color)}
            />
          ))
        )}
      </div>

      {/* Barra de navegación */}
      <div
        className="w-full max-w-sm flex justify-center items-center gap-24 py-4 fixed bottom-0"
        style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #F0F0F0" }}
      >
        <div style={{ cursor: "pointer" }} onClick={() => router.push("/home")}>
          <Home size={27} color="#071529" />
        </div>
        <div>
          <FileText size={27} color="#7A1D2D" />
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
