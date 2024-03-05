"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation'; 
import { useState } from 'react';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log(res);
    if (res.error) {
      setError(res.error);
    } else {
      router.push('/dashboard');
      router.refresh();
    }
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-neutral-950 text-white p-6 rounded space-y-4">
        <form onSubmit={onSubmit}>

          {error && (
            <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
          )}

          <h1 className="text-slate-200 font-bold text-4xl mb-4">Login</h1>

          <div className="space-y-2">
            <label htmlFor="email" className="text-slate-500 block text-sm">
              Email:
            </label>
            <input
              type="email"
              {...register("email", {
                required: "El email es requerido",
              })}
              className="p-3 rounded w-full bg-slate-900 text-slate-300"
              placeholder="usuario@email.com"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email.message}</span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-slate-500 block text-sm">
              Contraseña:
            </label>
            <input
              type="password"
              {...register("password", {
                required: "La contraseña es requerida",
              })}
              className="p-3 rounded w-full bg-slate-900 text-slate-300"
              placeholder="******"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>

          <button className="w-full bg-blue-500 p-3 rounded-lg mt-4">
            Iniciar Sesión
          </button>
        </form>

        <div className="text-center pt-4">
          <span>O bien</span>
        </div>

        <button
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          className="w-full bg-red-500 p-3 rounded-lg flex justify-center items-center mt-2"
        >
          Logearse con Google
        </button>
      </div>
    </div>
  );
}
export default LoginPage;
