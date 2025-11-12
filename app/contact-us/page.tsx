"use client";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#E5E5E5] px-6 py-16 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LEFT SECTION */}
        <div>
          <h1 className="text-6xl font-serif mb-4">Contact Us</h1>

          <p className="text-sm text-gray-400 max-w-sm mb-16">
            Please feel free to contact us and we will get back to you as soon
            as we can.
          </p>

          {/* FORM */}
          <form className="space-y-8 max-w-md">
            <div className="space-y-2">
              <label className="text-sm">Name</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-1 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Email</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-1 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Message</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-1 text-sm resize-none"
              />
            </div>

            <button className="w-full bg-[#3A3A3A] hover:bg-[#4A4A4A] text-sm py-3">
              Send
            </button>
          </form>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-14">
          {/* Visit Us */}
          <div>
            <h2 className="font-serif text-xl mb-4">Visit Us</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Adhunik Industries Limited <br />
              14 N.S. Road, 3rd Floor <br />
              Kolkata – 700001, West Bengal, India
            </p>
          </div>

          {/* Talk to Us */}
          <div>
            <h2 className="font-serif text-xl mb-4">Talk to Us</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              +91 33 2243 4350 <br />
              info@adhunikgroup.com
            </p>
          </div>

          {/* Social */}
          <div>
            <h2 className="font-serif text-xl mb-4">Social</h2>
            <div className="flex gap-6 text-lg text-gray-300">
              <span>✦</span>
              <span>⨀</span>
              <span>◎</span>
              <span>✸</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
