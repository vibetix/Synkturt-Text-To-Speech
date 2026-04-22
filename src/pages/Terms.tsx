import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p><strong>Last updated:</strong> April 2026</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using Synkturt, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on Synkturt's website for personal, non-commercial transitory viewing only.</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose;</li>
            <li>attempt to decompile or reverse engineer any software contained on the website;</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">3. User Content</h2>
          <p>You retain all your ownership rights in your content. By submitting text for synthesis, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and process the text solely for the purpose of providing the Text-to-Speech service to you.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">4. Limitations</h2>
          <p>In no event shall Synkturt or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Synkturt's website.</p>
        </div>
      </div>
    </div>
  );
}
