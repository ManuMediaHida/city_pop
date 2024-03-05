"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";


function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

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
      router.push("/auth/login");
    }
  });

  console.log(errors);

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      
      <div className="w-1/4 bg-neutral-950 text-white p-6 rounded">

      <form onSubmit={onSubmit}>
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Registro</h1>

        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          Nombre de usuario:
        </label>
        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "El nombre de usuario es requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="TuUsuario123"
        />

        {errors.username && (
          <span className="text-red-500 text-xs">
            {errors.username.message}
          </span>
        )}

        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "El Email es requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="usuario@email.com"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}

        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Contraseña:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "La contraseña es requerida",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="********"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}

        <label
          htmlFor="confirmPassword"
          className="text-slate-500 mb-2 block text-sm"
        >
          Confirmar Contraseña:
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "La confrimación de contraseña es requerida",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="********"
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Registrar
        </button>

      </form>

      
      <br></br>

      <div className="flex justify-center items-center">
        <span className="pb-4">O bien</span> 
      </div>


      <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })} className="w-full bg-red-500 text-white p-3 rounded-lg mt-2 flex justify-center items-center">
        Regístrate con  con Google
      </button>
      </div>
    </div>
  );
}
export default RegisterPage;
