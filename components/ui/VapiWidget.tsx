'use client'
import { useState } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import Vapi from '@vapi-ai/web'

const vapi = new Vapi('3d6a3064-b902-4498-93d6-10672e7c175f')

export default function VapiWidget() {
  const [panelOpen, setPanelOpen] = useState(false)

  const handleVapiCall = async () => {
    await vapi.start('6a715101-ebcd-4e5a-b853-791c67a9d49f')
  }

  return (
    <div
      style={{
        position: 'fixed',
        right: '24px',
        bottom: '32px',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px',
      }}
    >
      {/* WhatsApp button (bottom) */}
      <button
        onClick={() => window.open('https://wa.me/421948222333', '_blank')}
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: '#25d366',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          transition: 'transform 0.2s ease',
        }}
        title="WhatsApp"
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MessageCircle size={22} color="white" />
      </button>

      {/* Vapi panel */}
      {panelOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '130px',
            right: 0,
            width: '280px',
            background: 'rgba(13,21,37,0.98)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '16px',
            padding: '24px',
            zIndex: 101,
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}
        >
          <p
            style={{
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              marginBottom: '4px',
            }}
          >
            AI Asistent AutoFix
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.85rem',
              marginBottom: '20px',
            }}
          >
            Ako vám môžeme pomôcť?
          </p>

          <button
            onClick={handleVapiCall}
            style={{
              width: '100%',
              background: '#1a4fff',
              borderRadius: '10px',
              padding: '12px 20px',
              color: 'white',
              border: 'none',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(26,79,255,0.4)',
              marginBottom: '10px',
              transition: 'all 0.2s ease',
            }}
          >
            📞 Zavolať AI recepčnú
          </button>

          <button
            onClick={() => window.open('https://wa.me/421948222333', '_blank')}
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '10px',
              padding: '12px 20px',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')
            }
          >
            💬 Napísať na WhatsApp
          </button>

          <p
            style={{
              fontSize: '0.72rem',
              color: 'rgba(255,255,255,0.3)',
              textAlign: 'center',
              marginTop: '12px',
            }}
          >
            AI recepčná hovorí po slovensky 24/7
          </p>
        </div>
      )}

      {/* Vapi button (top) */}
      <div style={{ position: 'relative' }}>
        {/* Pulse ring */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid rgba(26,79,255,0.6)',
            animation: 'vapi-pulse 2s ease-out infinite',
          }}
        />
        <button
          onClick={() => setPanelOpen(!panelOpen)}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#1a4fff',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 24px rgba(26,79,255,0.5)',
            position: 'relative',
            zIndex: 1,
            transition: 'transform 0.2s ease',
          }}
          title="AI Asistent"
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <Phone size={22} color="white" />
        </button>
      </div>
    </div>
  )
}
