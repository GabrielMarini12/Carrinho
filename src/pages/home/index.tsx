import { BsCartPlus } from "react-icons/bs";

export function Home() {
  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          <section className="w-full">
            <img
              className="w-full rounded-lg max-h-70 mb-2"
              src="data:image/jpeg;base64,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"
              alt="Logo do produto"
            />
            <p className="font-medium mt-1 mb-2">Airpods Pro</p>

            <div className="flex gap-3 items-center">
              <strong className="text-zinc-700/90">R$ 1000</strong>
              <button className="bg-zinc-900 p-1 rounded">
                <BsCartPlus size={20} color="#fff" />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
