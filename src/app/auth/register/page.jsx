"use client"

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      // Redireccionar al login
      signIn('email', { email: data.email, callbackUrl: '/auth/login' });
    }
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-neutral-950 text-white p-6 rounded">
        <form onSubmit={onSubmit} className="space-y-4">
          <h1 className="text-xl font-bold mb-4">Registro</h1>

          {/* Form fields and submit button */}
          <div>
            <label htmlFor="username" className="block">Nombre de usuario:</label>
            <input
              type="text"
              {...register("username", { required: "El nombre de usuario es requerido" })}
              className="p-2 rounded bg-slate-900 text-slate-300 w-full"
              placeholder="TuUsuario123"
            />
            {errors.username && <span className="text-xs text-red-500">{errors.username.message}</span>}
          </div>

          <div>
            <label htmlFor="email" className="block">Email:</label>
            <input
              type="email"
              {...register("email", { required: "El Email es requerido" })}
              className="p-2 rounded bg-slate-900 text-slate-300 w-full"
              placeholder="usuario@email.com"
            />
            {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
          </div>

          <div>
            <label htmlFor="password" className="block">Contraseña:</label>
            <input
              type="password"
              {...register("password", { required: "La contraseña es requerida" })}
              className="p-2 rounded bg-slate-900 text-slate-300 w-full"
              placeholder="********"
            />
            {errors.password && <span className="text-xs text-red-500">{errors.password.message}</span>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block">Confirmar Contraseña:</label>
            <input
              type="password"
              {...register("confirmPassword", { required: "La confirmación de contraseña es requerida" })}
              className="p-2 rounded bg-slate-900 text-slate-300 w-full"
              placeholder="********"
            />
            {errors.confirmPassword && <span className="text-xs text-red-500">{errors.confirmPassword.message}</span>}
          </div>

          <button className="w-full bg-blue-500 p-2 rounded mt-4">
            Registrar
          </button>
        </form>

        <div className="text-center mt-4">
          <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })} className="bg-red-500 p-2 rounded text-white">
            Regístrate con Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
