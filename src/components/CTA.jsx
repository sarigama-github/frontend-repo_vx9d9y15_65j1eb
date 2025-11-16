function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ready to get started?</h2>
        <p className="mt-3 text-gray-600">We\'re launching soon. Join the waitlist and be first to access pharmacist support online.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" required placeholder="Your email address" className="w-full sm:w-96 rounded-md ring-1 ring-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600" />
          <button className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-white font-semibold shadow hover:bg-teal-700 transition-colors">Join waitlist</button>
        </form>
        <p className="mt-3 text-xs text-gray-500">By continuing you agree to our privacy policy.</p>
      </div>
    </section>
  )
}

export default CTA
