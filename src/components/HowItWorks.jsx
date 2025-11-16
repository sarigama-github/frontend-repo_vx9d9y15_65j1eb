function HowItWorks() {
  const steps = [
    { num: 1, title: 'Tell us what you need', desc: 'Share your symptoms or question. We\'ll guide you to the right pharmacist.' },
    { num: 2, title: 'Chat or video', desc: 'Choose a quick chat or a video call — on mobile, tablet, or desktop.' },
    { num: 3, title: 'Clear, safe advice', desc: 'Get practical guidance you can trust, with follow-up notes sent to you.' },
  ]

  return (
    <section id="how" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How it works</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="rounded-xl bg-white border border-gray-200 p-6">
              <div className="h-10 w-10 rounded-full bg-teal-600 text-white grid place-items-center font-bold">
                {s.num}
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

export default HowItWorks
