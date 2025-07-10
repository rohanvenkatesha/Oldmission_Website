'use client'

import { useState } from 'react'
import Chatbot from '../components/Chatbot'

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && <Chatbot onClose={() => setOpen(false)} />}
      {!open && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            💬 Chat
          </button>
        </div>
      )}
    </>
  )
}
