import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation Bar */}
      <header className="bg-white shadow fixed top-0 left-0 right-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-800">NCRA</h1>
          <ul className="flex space-x-6 text-sm font-medium text-gray-700">
            <li><a href="#program" className="hover:text-blue-700">Program</a></li>
            <li><a href="#grants" className="hover:text-blue-700">Grants</a></li>
            <li><a href="#contact" className="hover:text-blue-700">Contact</a></li>
            <li><a href="#resources" className="hover:text-blue-700">Resources</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-24 p-6 space-y-14 max-w-6xl mx-auto">
        {/* Homepage Hero Section */}
        <section className="text-center space-y-6 bg-white p-10 rounded-2xl shadow-xl">
          <h1 className="text-5xl font-extrabold text-blue-800">National Crisis Response Academy</h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Redefining crisis response through expert training, education, and support for law enforcement and public safety professionals.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800">
              Request Training
            </button>
            <button className="px-6 py-3 border border-blue-700 text-blue-700 font-semibold rounded-lg hover:bg-blue-50">
              Download Capability Statement
            </button>
          </div>
        </section>

        {/* Program Overview */}
        <section id="program" className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
          <h2 className="text-3xl font-semibold text-blue-700">Youth Crisis Intervention Training (CIT)</h2>
          <p>This 40-hour program is designed for professionals who interact with youth in crisis:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Law Enforcement (SROs, Patrol, Tribal, Campus)</li>
            <li>School Staff & Administration</li>
            <li>Mental Health Clinicians, Juvenile Justice Professionals</li>
          </ul>
          <p>Curriculum includes trauma-informed care, adolescent behavior, autism response, de-escalation tactics, and more.</p>
          <button className="px-4 py-2 border border-blue-700 text-blue-700 font-semibold rounded-lg hover:bg-blue-50">
            Download Program Guide
          </button>
        </section>

        {/* Cost Savings */}
        <section id="grants" className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
          <h2 className="text-3xl font-semibold text-blue-700">Cost-Savings & Grant Support</h2>
          <p>Implementing CIT saves agencies money through reduced emergency holds, fewer arrests, lower liability, and improved officer efficiency.</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Juvenile Diversion Savings</li>
            <li>Grant Support and Application Assistance</li>
            <li>Custom Fiscal Impact Reports</li>
          </ul>
          <button className="px-4 py-2 border border-blue-700 text-blue-700 font-semibold rounded-lg hover:bg-blue-50">
            Download Grant Narrative
          </button>
        </section>

        {/* Contact Form (Replaced with Google Form Embed) */}
        <section id="contact" className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
          <h2 className="text-3xl font-semibold text-blue-700">Contact / Intake Form</h2>
          <div className="w-full h-[900px]">
            <iframe
              src="https://forms.gle/DWCvEEucbA5GxkcH8"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="NCRA Contact Form"
              className="rounded-lg border border-gray-300"
            >
              Loading…
            </iframe>
          </div>
        </section>

        {/* Resource Hub */}
        <section id="resources" className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
          <h2 className="text-3xl font-semibold text-blue-700">Resource Hub</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><a href="#" className="text-blue-600 underline">Program Overview Flyer (PDF)</a></li>
            <li><a href="#" className="text-blue-600 underline">Capability Statement (PDF)</a></li>
            <li><a href="#" className="text-blue-600 underline">Grant Narrative (Word)</a></li>
            <li><a href="#" className="text-blue-600 underline">Officer Confidence Survey Packet (PDF)</a></li>
            <li><a href="#" className="text-blue-600 underline">Business Plan for Agencies (PDF)</a></li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-10 border-t text-sm text-gray-600 text-center">
        <p>&copy; {new Date().getFullYear()} National Crisis Response Academy. All rights reserved.</p>
        <p className="mt-2">Email: <a href="mailto:info@crisisresponseacademy.org" className="text-blue-600 underline">info@crisisresponseacademy.org</a></p>
      </footer>
    </div>
  );
}