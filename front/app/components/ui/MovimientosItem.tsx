import { ReactNode } from "react";

type Props = {
  nombre: string;
  descripcion: string;
  monto: string;
  color: string;
  iconColor: string;
  icono: ReactNode;
};

export default function MovimientoItem({ nombre, descripcion, monto, color, iconColor, icono }: Props) {
  return (
    <div
      className="flex items-center justify-between px-4"
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        height: "92px",
        boxShadow: "0px 8px 30px rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex items-center justify-center"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            backgroundColor: iconColor,
            flexShrink: 0,
          }}
        >
          {icono}
        </div>
        <div>
          <p style={{ fontSize: "16px", fontWeight: 500, color: "#616E7C" }}>
            {nombre}
          </p>
          <p style={{ fontSize: "12px", fontWeight: 400, color: "#AAAAAA" }}>
            {descripcion}
          </p>
        </div>
      </div>
      <p style={{ fontSize: "14px", fontWeight: 500, color: color }}>
        {monto}
      </p>
    </div>
  );
}