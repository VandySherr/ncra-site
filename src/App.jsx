import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white shadow fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-500">NCRA</h1>
        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <li><Link to="/program" className="hover:text-yellow-500">Program</Link></li>
          <li><Link to="/grants" className="hover:text-yellow-500">Grants</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
          <li><Link to="/resources" className="hover:text-yellow-500">Resources</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <section className="text-center space-y-6 bg-white p-10 rounded-2xl shadow-xl">
      <h1 className="text-5xl font-extrabold text-yellow-500">National Crisis Response Academy</h1>
      <p className="text-lg max-w-2xl mx-auto text-gray-600">
        Redefining crisis response through expert training, education, and support for law enforcement and public safety professionals.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700">
          Request Training
        </button>
      </div>
    </section>
  );
}

function ProgramPage() {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
      <h2 className="text-3xl font-semibold text-yellow-600">Youth Crisis Intervention Training (CIT)</h2>
      <p>This 40-hour program is designed for professionals who interact with youth in crisis:</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Law Enforcement (SROs, Patrol, Tribal, Campus)</li>
        <li>School Staff & Administration</li>
        <li>Mental Health Clinicians, Juvenile Justice Professionals</li>
      </ul>
      <p>Curriculum includes trauma-informed care, adolescent behavior, autism response, de-escalation tactics, and more.</p>
    </section>
  );
}

function GrantsPage() {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
      <h2 className="text-3xl font-semibold text-yellow-600">Cost-Savings & Grant Support</h2>
      <p>Implementing CIT saves agencies money through reduced emergency holds, fewer arrests, lower liability, and improved officer efficiency.</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Juvenile Diversion Savings</li>
        <li>Grant Support and Application Assistance</li>
        <li>Custom Fiscal Impact Reports</li>
      </ul>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
      <h2 className="text-3xl font-semibold text-yellow-600">Contact / Intake Form</h2>
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
  );
}

function ResourcesPage() {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
      <h2 className="text-3xl font-semibold text-yellow-600">Resource Hub</h2>
      <p className="text-gray-600">Resources will be linked here soon.</p>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0d2741] text-gray-800">
        <Navbar />
        <main className="pt-24 p-6 space-y-14 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/grants" element={<GrantsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>
        <footer className="bg-[#0d2741] text-yellow-400 py-6 mt-10 border-t text-sm text-center">
          <p>&copy; {new Date().getFullYear()} National Crisis Response Academy. All rights reserved.</p>
          <p className="mt-2">Email: <a href="mailto:info@crisisresponseacademy.org" className="underline">info@crisisresponseacademy.org</a></p>
        </footer>
      </div>
    </Router>
  );
}