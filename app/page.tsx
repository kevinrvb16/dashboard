import LoginForm from "@/components/LoginForm"
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center bg-slate-600 px-5">
      <Suspense fallback={<div className="flex justify-center items-center">Carregando...</div>}>
        <LoginForm />
      </Suspense>
      </div>
    </main>
  );
}
