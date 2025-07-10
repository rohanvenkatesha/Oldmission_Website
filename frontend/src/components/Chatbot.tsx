// src/components/Chatbot.tsx

import { useEffect, useState, useRef, FC } from "react";
import { motion } from "framer-motion";
import axios, { AxiosError } from "axios";

interface ChatbotProps {
  onClose: () => void;
}

type ChatStage = "chatting" | "booking_name" | "booking_email" | "booking_done";

const Chatbot: FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [chatStage, setChatStage] = useState<ChatStage>("chatting");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [showCalendly, setShowCalendly] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Define your website-specific context here with extracted data
  // This huge block of text will ONLY be passed to the AI when a specific question is asked.
  const websiteContext = `
    Old Mission Medicine is a national leader in healthcare innovation, founded by Dr. Christopher P. Mason.
    Our mission is to elevate healthcare standards nationwide by providing a comprehensive ecosystem of services.
    We empower providers to deliver unparalleled patient outcomes through clinical care, business strategy, and regulatory compliance.

    Our Family of Brands (Services/Specialties):
    - **Old Mission Aesthetics:** Cutting-edge aesthetic treatments and training for medical professionals.
    - **Old Mission Lifestyle Medicine:** Personalized wellness plans focusing on functional and preventative care.
        - **Specific Lifestyle Medicine services:** Functional Medicine (root cause healing), Hormone Therapy (optimize hormones), Peptide Therapy (rejuvenate health), Medical Weight Loss (personalized coaching), Sexual Wellness (therapeutic solutions), Comprehensive Lab Testing (diagnose root cause), DNA Testing (assess biological processes).
        - **Membership Plans:** Legacy ($300 to Begin, $155.00/mo. There After - includes advanced bloodwork, medical history, quarterly physician visits, biannual follow-up labs, personal health report dashboard, and 8+ more features). Other plans: Premium, Athletic, and Executive Memberships.
    - **Old Mission Emergency Medicine:** Expert hospital management, staffing solutions, and leadership development for hospitals and physician groups.
    - **Old Mission IV Nutrition:** Tailored intravenous nutrient therapies to boost wellness and vitality.
    - **Old Mission Wound Care:** Advanced wound healing programs with full compliance and reimbursement support for non-physician wound care providers.
    - **Old Mission Regulatory Compliance:** Ensures state and federal regulatory compliance for medical practices nationwide (business-to-business solution).

    Key Services (Business-to-Business):
    - Regulatory Compliance: For compliance laws and ownership.
    - Clinical Liaison Services: To modernize operations for premier patient care and profitability.
    - Hospital Management & Leadership (Emergency Medicine Solutions).
    - Specialized Wound Care Programs.

    Our Unique Approach:
    - 12,000+ Patients Served
    - 15 Years of Experience
    - 6 Locations Nationwide
    - 30+ Providers on Staff
    - Patient-Centered Care: Personalized treatment plans.
    - Integrated Health Solutions: Combining medical science with holistic approaches.
    - Expert Medical Team: Highly qualified physicians and specialists.
    - Advanced Technology: Utilizing latest medical technologies and evidence-based practices.

    Our Visionary Leaders:
    - Dr. Christopher P. Mason: Founder & CEO
    - Dana Cusick: National Business and Practice Manager
    - Colin Zaporski: Chief Clinical Director
    - Jeffrey Swisshelm: Business Development & Marketing Manager

    Our Team / Healthcare Professionals (Examples - not exhaustive list):
    - Jackie Fiegel (Certified Pilates, Yoga & Meditation Teacher)
    - Dan Matha (Strength & Transformation Coach)
    - Jeri Davis, MSW (Life Coach)
    - Melissa Welch, FNP-C, RN (Health Coach)
    - Michel Akl, MD (East Regional Medical Aesthetics Trainer)
    - Dr. Eddie Turner (Family Medicine Physician)
    - Jami Bryant, PhD, MBA, MPH, RN, NPD-BC (Business Consultant)
    - Mustafa Alsaid, MD (West Regional Associate Supervising Physician)
    - Micah Craig, MD (West Regional Associate Supervising Physician)
    - Farah Fatima, MD, DO (Northeast Regional Associate Supervising Physician)
    - Sarah Schuller, PA (Northeast Regional Advanced Practice Clinician)
    - Jonathan Snipes, MD (Southeast Regional Associate Supervising & Lifestyle Physician)
    - Francine Ortiz, RN (West Regional Aesthetics Trainer)
    - Lori Shemek, PhD, CNC (Health, Weight Loss & Inflammation Expert)
    - Keith Bandli, MS, ATC/L (Fellow of Applied Functional Science)
    - Isaac Velarde (Nutritionist and Personal Trainer)

    Products:
    - Skincare: Vitamin C Serum ($48.00)
    - Treatments: Hydrating Face Mask ($32.00)
    - Essentials: Organic Aloe Gel ($24.00)
    - Protection: SPF 50 Sunscreen ($36.00)
    - Anti-Aging: Retinol Night Cream ($62.00)

    Contact Information:
    - Email: support@oldmission.com
    - Address: 1989 Kroupa Rd, Traverse City, MI 49686 (Note: The initial context mentioned Westwood, Michigan. If the primary clinic is Traverse City, please clarify or update the prompt).
    - Location given for booking via Calendly for Rohan Venkatesha suggests a possible personal or specific clinic line.

    Legal: Privacy Policy, Terms of Use, Disclaimer, Accessibility.
    Current Year: 2025.
    `;

  // Load saved session on mount from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    const savedName = localStorage.getItem("userName");
    const savedEmail = localStorage.getItem("userEmail");
    const savedStage = localStorage.getItem("chatStage");
    const savedCalendlyVisibility = localStorage.getItem("showCalendly");

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setMessages([
        {
          role: "bot",
          content: `Hi there! I'm Old Mission Medicine's AI assistant. How can I help you today?`,
        },
      ]);
    }

    if (savedName) setUserName(savedName);
    if (savedEmail) setUserEmail(savedEmail);
    if (savedStage) setChatStage(savedStage as ChatStage);
    if (savedCalendlyVisibility) setShowCalendly(JSON.parse(savedCalendlyVisibility));
    else if (savedStage === "booking_done") setShowCalendly(true);
  }, []);

  // Save session on updates to localStorage
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("chatStage", chatStage);
    localStorage.setItem("showCalendly", JSON.stringify(showCalendly));
  }, [messages, userName, userEmail, chatStage, showCalendly]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showCalendly]);

  // Handler for the "Book Now" button
  const handleBookNowClick = () => {
    // Add a user-like message to show intent, then trigger booking flow
    setMessages((prev) => [...prev, { role: "user", content: "I want to book an appointment." }]);
    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        content: "Sure! I can help with that. What's your name?",
      },
    ]);
    setChatStage("booking_name");
    setShowCalendly(false); // Hide Calendly if it was open before initiating new booking flow
  };


  const sendToAI = async (newMessageContent: string, includeWebsiteContext: boolean = true) => {
    const systemMessageContent = includeWebsiteContext
      ? `You are a helpful and knowledgeable AI assistant for Old Mission Medicine.
         Your primary goal is to answer questions STRICTLY based on the provided 'websiteContext' information about Old Mission Medicine's services, brands, team, and operations.
         DO NOT use general medical knowledge, make assumptions, or provide information not explicitly stated in the 'websiteContext'.
         If you cannot find the answer in the provided 'websiteContext', politely state that the information is not available in your current knowledge base and suggest checking the Old Mission Medicine website or contacting them directly.
         Provide 2-3 line answers if detailed information is required, otherwise very short answers.
         The current year is 2025.
         The current location is Westwood, Michigan, United States.

         --- Start of websiteContext ---
         ${websiteContext}
         --- End of websiteContext ---
        `
      : `You are a helpful and friendly AI assistant for Old Mission Medicine. Respond briefly and engagingly to initial greetings or general small talk. Provide very short answers.`; // Simpler system prompt for general chat

    try {
      const res = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "mistralai/mistral-7b-instruct:free",
          messages: [
            {
              role: "system",
              content: systemMessageContent,
            },
            ...messages
              .filter((m) => !(m.role === "bot" && m.content === messages[0]?.content))
              .map((m) => ({
                role: m.role === "bot" ? "assistant" : m.role,
                content: m.content,
              })),
            { role: "user", content: newMessageContent },
          ],
          temperature: includeWebsiteContext ? 0.2 : 0.6,
          max_tokens: includeWebsiteContext ? 100 : 40,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      return res.data.choices[0].message.content;
    } catch (error) {
      console.error("AI error:", error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error("Error response data:", error.response.data);
          if (error.response.status === 401) {
            return "Authentication failed. Please check the API key configuration. (Status 401)";
          } else {
            return `API error (${error.response.status}): ${error.response.data?.message || error.message}. Please try again.`;
          }
        } else if (error.request) {
          return "Network error: Could not connect to the AI service. Please check your internet connection.";
        }
      }
      return "Sorry, an unexpected error occurred with the AI. Please try again later.";
    }
  };

  const handleUserMessage = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();

    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");

    if (chatStage === "booking_name") {
      setUserName(userMsg);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: `Thanks, ${userMsg}! What's your email?` },
      ]);
      setChatStage("booking_email");
      return;
    }

    if (chatStage === "booking_email") {
      if (!userMsg.includes("@") || !userMsg.includes(".")) {
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: "Please enter a valid email address." },
        ]);
        return;
      }
      setUserEmail(userMsg);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Great! Here's the booking form. Please select your appointment time.",
        },
      ]);
      setChatStage("booking_done");
      setShowCalendly(true);
      return;
    }

    if (chatStage === "chatting") {
      const lower = userMsg.toLowerCase();
      const wantsBooking = ["book", "appointment", "schedule", "consultation", "make an appointment"].some((word) =>
        lower.includes(word)
      );

      const needsDetailedContext = ["service", "services", "offer", "about", "mission", "leader", "brand", "team", "contact", "product", "products", "membership", "memberships", "what do you do", "who is", "tell me about", "location", "address", "hours"].some((word) => // Added location/address/hours keywords
        lower.includes(word)
      );

      if (wantsBooking) {
        handleBookNowClick(); // Use the existing handler for consistency
        return;
      }

      if (["hi", "hello", "hey", "how are you", "what's up", "good morning", "good afternoon"].some(greeting => lower.includes(greeting) && lower.length < 15)) {
        const aiReply = await sendToAI(userMsg, false);
        setMessages((prev) => [...prev, { role: "bot", content: aiReply }]);
      }
      else if (needsDetailedContext) {
        const aiReply = await sendToAI(userMsg, true);
        setMessages((prev) => [...prev, { role: "bot", content: aiReply }]);
      }
      else {
        const aiReply = await sendToAI(userMsg, false);
        setMessages((prev) => [...prev, { role: "bot", content: aiReply }]);
      }

    } else if (chatStage === "booking_done") {
      const aiReply = await sendToAI(userMsg, true);
      setMessages((prev) => [...prev, { role: "bot", content: aiReply }]);
    }
  };

  const appointmentPinned = chatStage === "booking_done" && userName && userEmail;

  return (
    <div className="fixed bottom-6 right-6 w-80 h-[600px] bg-white dark:bg-gray-900 shadow-lg rounded-xl z-50 flex flex-col overflow-hidden">
      <div className="bg-blue-600 dark:bg-blue-700 text-white p-4 font-bold text-lg flex justify-between items-center">
        <span>💬 Chat with Us</span>
        <button
          onClick={onClose}
          className="text-white text-xl font-bold ml-2 hover:text-red-300"
          aria-label="Close chat"
        >
          &times;
        </button>
      </div>

      {/* Book an Appointment Today! Button */}
      {chatStage === 'chatting' && ( // Only show if in general chat stage
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-2 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-center"
        >
          <button
            onClick={handleBookNowClick}
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            aria-label="Book an appointment today"
          >
            🗓️ Book an Appointment Today!
          </button>
        </motion.div>
      )}

      {appointmentPinned && (
        <div className="bg-yellow-400 dark:bg-yellow-600 text-yellow-900 dark:text-yellow-100 text-center text-sm font-semibold py-1 px-3 rounded-b-md">
          📌 Your appointment is booked. You can continue chatting below.
          {showCalendly && (
            <button
              onClick={() => setShowCalendly(false)}
              className="ml-2 text-xs underline hover:no-underline"
            >
              (Hide form)
            </button>
          )}
          {!showCalendly && (
            <button
              onClick={() => setShowCalendly(true)}
              className="ml-2 text-xs underline hover:no-underline"
            >
              (Show form)
            </button>
          )}
        </div>
      )}

      <div className="flex-1 p-3 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-blue-400 dark:scrollbar-thumb-blue-700 scrollbar-track-gray-200 dark:scrollbar-track-gray-800">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-sm p-2 rounded-lg max-w-[85%] ${
              msg.role === "user"
                ? "bg-blue-100 text-right ml-auto dark:bg-blue-800 dark:text-gray-100"
                : "bg-gray-100 text-left mr-auto dark:bg-gray-700 dark:text-gray-50"
            }`}
          >
            {msg.content}
          </motion.div>
        ))}
        <div ref={chatEndRef} />
        {showCalendly && (
          <iframe
            src={`https://calendly.com/rohanvenkatesha?name=${encodeURIComponent(
              userName
            )}&email=${encodeURIComponent(userEmail)}`}
            width="100%"
            height="400"
            className="rounded-xl border mt-4 border-gray-300 dark:border-gray-600"
            title="Calendly Booking Form"
            frameBorder="0"
          />
        )}
      </div>

      <div className="flex items-center border-t border-gray-300 dark:border-gray-700 p-2">
        <input
          className="flex-1 px-2 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleUserMessage()}
          placeholder="Type your message..."
          disabled={false}
          autoFocus
          autoComplete="off"
        />
        <button
          onClick={handleUserMessage}
          className="ml-2 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!input.trim()}
          aria-label="Send message"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;