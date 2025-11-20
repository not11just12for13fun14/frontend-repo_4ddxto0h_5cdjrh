import { Ambulance, Baby, Syringe, Stethoscope, HeartPulse, Pill } from 'lucide-react'

const services = [
  { icon: Stethoscope, title: 'General Medicine', desc: 'Primary care, check-ups, and treatment for common conditions.' },
  { icon: HeartPulse, title: 'Emergency Care', desc: '24/7 emergency services with prompt and professional response.' },
  { icon: Syringe, title: 'Diagnostics & Lab', desc: 'Modern laboratory, imaging, and diagnostic services.' },
  { icon: Baby, title: 'Maternity & Child Care', desc: 'Prenatal, delivery, and pediatric services for mothers and children.' },
  { icon: Pill, title: 'Pharmacy', desc: 'On-site pharmacy for convenient access to medications.' },
  { icon: Ambulance, title: 'Ambulance Services', desc: 'Fully equipped ambulances for safe patient transport.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900">Our Services</h2>
          <p className="mt-3 text-gray-600">Comprehensive healthcare tailored for families in Greater Accra. We combine compassion with modern medical practice.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-green-100 bg-green-50/40 hover:bg-green-50 transition">
              <div className="w-12 h-12 rounded-lg bg-green-100 text-green-700 flex items-center justify-center">
                <Icon />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-green-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
