function Services() {
  const services = [
    {
      title: 'One-to-one consultation',
      desc: 'Speak with a UK-registered pharmacist by chat or video for personalised advice on medicines, symptoms, and treatments.',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v8a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Prescription & dosage help',
      desc: 'Get guidance on missed doses, side effects, interactions, and how to take medicines safely and effectively.',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Minor ailments & OTC',
      desc: 'Advice on cold & flu, allergies, skin conditions, pain relief and more — including the best over-the-counter options.',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 0V4m0 8v4m0 4h.01M20 12a8 8 0 10-16 0 8 8 0 0016 0z" />
        </svg>
      ),
    },
    {
      title: 'Medication reviews',
      desc: 'A quick check to make sure your medicines are right for you, with clear, practical recommendations.',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What we can help with</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Fast, accessible support that complements your GP and local pharmacy.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-md bg-teal-600 text-white grid place-items-center">
                {s.icon}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
