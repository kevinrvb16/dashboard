
export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center bg-slate-600 px-5">
        <form className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-2">
          <h2 className="font-bold text-lg mb-6">Faça o login</h2>
          <input type="email" placeholder="Email" className="input input-primary w-full" />
          <input type="password" placeholder="Senha" className=" input input-primary w-full" />
          <button className="btn btn-primary w-full">Login</button>
        </form>
      </div>
    </main>
  );
}
