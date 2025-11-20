export default function About() {
  return (
    <section id="about" className="bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-900">About BJ Medical Center</h2>
            <p className="mt-4 text-gray-700">BJ Medical Center is a private community hospital serving families across Greater Accra, Ghana. Our mission is to provide accessible, high-quality healthcare with dignity and compassion.</p>
            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Private community hospital with patient-centered care</li>
              <li>Experienced doctors, nurses, and support staff</li>
              <li>Modern facilities and equipment</li>
              <li>Affordable services for all community members</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-green-100/70 rounded-2xl blur-xl" />
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop" alt="About BJ Medical Center" className="relative rounded-2xl shadow-lg border border-green-100" />
          </div>
        </div>
      </div>
    </section>
  )
}
