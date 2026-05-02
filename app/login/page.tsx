"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [recordarme, setRecordarme] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        text: "Por favor completá todos los campos",
        confirmButtonColor: "#7A1D2D",
      });
      return;
    }
    router.push("/home");
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: "#F9FAFC" }}
    >
      <div
        className="w-16 h-16 rounded-2xl mb-4"
        style={{ backgroundColor: "var(--granate)" }}
      ></div>
      <h1
        className="font-medium text-center mb-2"
        style={{ color: "var(--granate)", fontSize: "40px" }}
      >
        GranaBank
      </h1>
      <p
        className="text-sm text-center mb-8"
        style={{ color: "var(--gris-texto)" }}
      >
        Con cada compra, sumás orgullo granate
      </p>

      <div className="w-full max-w-sm">
        <label
          className="block mb-2"
          style={{ color: "#334154", fontSize: "16px", fontWeight: 500 }}
        >
          Email
        </label>

        <input
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full outline-none"
          style={{
            height: "54px",
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 8px 30px rgba(0,0,0,0.06)",
            padding: "0 16px",
            fontSize: "14px",
            color: "#AAAAAA",
          }}
        />
      </div>

      <div className="w-full max-w-sm mt-4">
        <label
          className="block mb-2"
          style={{ color: "#334154", fontSize: "16px", fontWeight: 500 }}
        >
          Contraseña
        </label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full outline-none"
          style={{
            height: "54px",
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 8px 30px rgba(0,0,0,0.06)",
            padding: "0 16px",
            fontSize: "14px",
            color: "#AAAAAA",
          }}
        />
      </div>

      <div className="w-full max-w-sm flex items-center gap-2 mt-4">
        <div
          onClick={() => setRecordarme(!recordarme)}
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "4px",
            backgroundColor: recordarme ? "var(--granate)" : "#DBDBDB",
            flexShrink: 0,
            cursor: "pointer",
          }}
        />
        <span style={{ fontSize: "14px", fontWeight: 500, color: "#334154" }}>
          Recordarme
        </span>
      </div>

      <button
        onClick={handleLogin}
        className="w-full max-w-sm mt-8"
        style={{
          height: "60px",
          borderRadius: "16px",
          backgroundColor: "#7A1D2D",
          boxShadow: "0px 8px 30px rgba(0,0,0,0.06)",
          color: "#FFFFFF",
          fontSize: "16px",
          fontWeight: 600,
          cursor: "pointer",
          border: "none",
        }}
      >
        Ingresar
      </button>
    </main>
  );
}
