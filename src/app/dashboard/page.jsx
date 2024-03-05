"use client"
import Link from 'next/link';
import { signOut } from 'next-auth/react';

function DashboardPage() {
  const handleSignOut = async (e) => {
    e.preventDefault();
    
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <div>
        <h1 className="text-white text-5xl">Dashboard</h1>
        <button onClick={handleSignOut} className="bg-white text-black px-4 py-2 rounded-md mt-4">
          Logout
        </button>
        <Link href="/singers" className="inline-block bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4 ml-4">Administrar Cantantes
        </Link>
        <Link href="/songs" className="inline-block bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-4 ml-4">Administrar Canciones
        </Link>
      </div>
    </section>
  );
}

export default DashboardPage;
