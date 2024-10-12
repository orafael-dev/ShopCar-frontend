import { Container } from "../../components/container";
import maverick1 from "../../assets/cars/Maverick1.webp";

export function Home() {
  return (
    <Container>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center">
        <input
          className="w-full border-2 rounded-lg h-9 px-3 outline-none"
          placeholder="Digite o nome do carro..."
        />
        <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg">
          Buscar
        </button>
      </section>

      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Carros Novos e Usados
      </h1>

      <main className="grid grid-col-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src={maverick1}
            alt="carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">Maverick V8 Coupé</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">
              Ano 1979/1979 | 60.000 km
            </span>
            <strong className="text-black font-medium text-xl">
              R$ 90.000
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">Florianópolis - SC</span>
          </div>
        </section>

        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src={maverick1}
            alt="carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">Maverick V8 Coupé</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">
              Ano 1979/1979 | 60.000 km
            </span>
            <strong className="text-black font-medium text-xl">
              R$ 90.000
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">Florianópolis - SC</span>
          </div>
        </section>

        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src={maverick1}
            alt="carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">Maverick V8 Coupé</p>

          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">
              Ano 1979/1979 | 60.000 km
            </span>
            <strong className="text-black font-medium text-xl">
              R$ 90.000
            </strong>
          </div>

          <div className="w-full h-px bg-slate-200 my-2"></div>

          <div className="px-2 pb-2">
            <span className="text-zinc-700">Florianópolis - SC</span>
          </div>
        </section>
      </main>
    </Container>
  );
}
