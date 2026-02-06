export default function Home() {
  return (
    <section className="space-y-8">
      <h1 className="text-5xl font-black text-red-400">OpenClaw Sicherheitslage: AKTIV</h1>
      <p className="text-xl text-gray-300">
        ClawGuru ist das unabhängige Lage- und Operationszentrum für produktive OpenClaw-Instanzen.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border border-gray-800 rounded-xl">
          <h3 className="font-bold text-red-400">21.639</h3>
          <p>öffentlich exponierte Instanzen</p>
        </div>
        <div className="p-6 border border-gray-800 rounded-xl">
          <h3 className="font-bold text-orange-400">93.4%</h3>
          <p>anfällig für Auth-Bypass</p>
        </div>
        <div className="p-6 border border-gray-800 rounded-xl">
          <h3 className="font-bold text-green-400">Live</h3>
          <p>Monitoring & Research</p>
        </div>
      </div>
    </section>
  )
}
