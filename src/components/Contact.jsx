import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-green-900">Contact Us</h2>
            <p className="mt-3 text-gray-700">We’re here for you. Get in touch to book an appointment, ask a question, or request emergency assistance.</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center"><Phone /></div>
                <div>
                  <p className="font-semibold text-green-900">Phone</p>
                  <p className="text-gray-700">+233 (0) 30 000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center"><Mail /></div>
                <div>
                  <p className="font-semibold text-green-900">Email</p>
                  <p className="text-gray-700">info@bjmedicalcenter.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center"><MapPin /></div>
                <div>
                  <p className="font-semibold text-green-900">Location</p>
                  <p className="text-gray-700">Greater Accra, Ghana</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center"><Clock /></div>
                <div>
                  <p className="font-semibold text-green-900">Hours</p>
                  <p className="text-gray-700">Open 24/7 (Emergency). Outpatient: Mon–Sat, 8am–6pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <form className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-green-900">Full Name</label>
                <input type="text" className="mt-1 w-full rounded-md border-green-200 focus:ring-2 focus:ring-green-600 focus:border-green-600" placeholder="Your name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-green-900">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border-green-200 focus:ring-2 focus:ring-green-600 focus:border-green-600" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-900">Phone</label>
                  <input type="tel" className="mt-1 w-full rounded-md border-green-200 focus:ring-2 focus:ring-green-600 focus:border-green-600" placeholder="+233..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-green-900">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md border-green-200 focus:ring-2 focus:ring-green-600 focus:border-green-600" placeholder="How can we help?" />
              </div>
              <button type="button" className="mt-2 inline-flex justify-center rounded-md bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
