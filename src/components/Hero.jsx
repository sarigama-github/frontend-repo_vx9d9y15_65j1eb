function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              NHS-quality pharmacy advice, online
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-prose">
              Virtual Pharmacist connects you with UK-registered pharmacists for safe, convenient guidance on medications, symptoms, and over-the-counter treatments — from any device, in minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-white font-semibold shadow hover:bg-teal-700 transition-colors">Explore services</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-teal-700 font-semibold ring-1 ring-teal-200 hover:bg-teal-50 transition-colors">Talk to a pharmacist</a>
            </div>
            <p className="mt-4 text-sm text-gray-500">UK only • HIPAA/GDPR aligned • No app required</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-white to-teal-50 ring-1 ring-gray-200 shadow-lg p-6">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="rounded-lg bg-white ring-1 ring-gray-200 p-4">
                  <p className="font-semibold text-gray-800">Prescription queries</p>
                  <p className="text-sm text-gray-600 mt-2">Side effects, interactions, missed doses</p>
                </div>
                <div className="rounded-lg bg-white ring-1 ring-gray-200 p-4">
                  <p className="font-semibold text-gray-800">Minor ailments</p>
                  <p className="text-sm text-gray-600 mt-2">Colds, hay fever, skin conditions</p>
                </div>
                <div className="rounded-lg bg-white ring-1 ring-gray-200 p-4">
                  <p className="font-semibold text-gray-800">OTC guidance</p>
                  <p className="text-sm text-gray-600 mt-2">Best options, correct use, safety</p>
                </div>
                <div className="rounded-lg bg-white ring-1 ring-gray-200 p-4">
                  <p className="font-semibold text-gray-800">Medication reviews</p>
                  <p className="text-sm text-gray-600 mt-2">Personalised advice to suit you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
