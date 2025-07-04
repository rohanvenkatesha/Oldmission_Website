// TODO: Floating chatbot button using GPT
export default function ChatbotWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition">
        💬 Chat
      </button>
    </div>
  )
}