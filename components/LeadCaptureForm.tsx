'use client'

export default function LeadCaptureForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Get a Free Consultation</h3>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          placeholder="Your Phone"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Get Free Consultation
        </button>
      </form>
    </div>
  )
}