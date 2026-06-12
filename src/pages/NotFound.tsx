import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface MonitorStatus {
  status: 'up' | 'down' | 'unknown'
}

function VpsStatusBadge({ vpsId, label }: { vpsId: string; label: string }) {
  const [monitor, setMonitor] = useState<MonitorStatus>({ status: 'unknown' })

  useEffect(() => {
    fetch('https://app.octelis.com/api/status/summary', { cache: 'no-store' })
      .then(r => r.json())
      .then(data => {
        const key = vpsId.replace('-', '').toUpperCase()
        const s = (data.servers as Array<{ name: string; status: string }>)?.find(
          s => s.name.toUpperCase() === key
        )
        if (s) setMonitor({ status: s.status.toLowerCase() as MonitorStatus['status'] })
      })
      .catch(() => {})
  }, [vpsId])

  const colorMap = { up: '#16a34a', down: '#dc2626', unknown: '#94a3b8' }
  const labelMap = { up: 'Operational', down: 'Down', unknown: 'Checking...' }
  const color = colorMap[monitor.status]

  return (
    <span
      className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded border"
      style={{ borderColor: `${color}44`, background: `${color}11` }}
    >
      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: color, flexShrink: 0, display: 'inline-block' }} />
      <span style={{ color, fontWeight: 600 }}>{label} — {labelMap[monitor.status]}</span>
    </span>
  )
}

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 text-center bg-white">
      <div className="max-w-lg w-full">
        <p className="text-7xl font-bold text-gray-200 mb-2">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-10 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <p className="text-xs text-gray-400 mb-3">Infrastructure status</p>
          <div className="flex flex-wrap justify-center gap-3 mb-3">
            <VpsStatusBadge vpsId="vps-1" label="VPS 1" />
            <VpsStatusBadge vpsId="vps-2" label="VPS 2" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4 text-xs">
            <a
              href="https://status.octelis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              View status page
            </a>
            <span className="hidden sm:inline text-gray-200">|</span>
            <a
              href="https://status.octelis.com/support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              Contact technical support
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <a
            href="https://octelis.com?utm_source=client-site&utm_medium=404-page&utm_campaign=built-by&utm_content=emil-heyerdahl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <img src="https://octelis.com/octelis-logo-full-transparent.png" alt="Octelis" style={{ height: '16px', width: 'auto' }} />
            <span className="text-xs">Built by Octelis</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NotFound
