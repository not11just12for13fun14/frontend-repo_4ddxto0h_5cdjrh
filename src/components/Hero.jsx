import { Stethoscope, HeartPulse, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-green-700 bg-green-100 px-3 py-1 rounded-full text-xs font-semibold">Private Community Hospital • Greater Accra, Ghana</span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-green-900">BJ Medical Center</h1>
            <p className="mt-4 text-lg text-gray-700">Compassionate, quality healthcare for families in our community. We are a private community hospital dedicated to accessible care, modern facilities, and trusted professionals.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-green-600 text-white font-semibold shadow hover:bg-green-700">Our Services</a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-green-200 text-green-700 font-semibold hover:bg-green-50">Book an Appointment</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-green-800"><Stethoscope className="text-green-600" /> 24/7 Care</div>
              <div className="flex items-center gap-2 text-green-800"><HeartPulse className="text-green-600" /> Emergency</div>
              <div className="flex items-center gap-2 text-green-800"><ShieldCheck className="text-green-600" /> Trusted</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-green-100/60 rounded-3xl blur-2xl" />
            <img src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb3NwaXRhbHxlbnwwfDB8fHwxNzYzNjYzNTk0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Hospital" className="relative rounded-2xl shadow-2xl border border-green-100" />
          </div>
        </div>
      </div>
    </section>
  )
}
