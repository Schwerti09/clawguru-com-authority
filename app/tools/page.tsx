'use client'
import { useState } from 'react'

export default function Tools() {
  const [config, setConfig] = useState('')
  const [result, setResult] = useState<string | null>(null)

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">OpenClaw Config Validator</h1>
      <textarea
        className="w-full h-40 bg-gray-900 border border-gray-700 p-4"
        placeholder="Paste deine OpenClaw config hier…"
        value={config}
        onChange={e => setConfig(e.target.value)}
      />
      <button
        onClick={() => setResult(config.includes('0.0.0.0') ? 'KRITISCH: öffentlich gebunden' : 'Keine offensichtliche Exposition erkannt')}
        className="px-6 py-3 bg-red-600 rounded-lg font-bold"
      >
        Prüfen
      </button>
      {result && <div className="p-4 border border-gray-700 rounded-lg">{result}</div>}
    </section>
  )
}
