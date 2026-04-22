import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p><strong>Last updated:</strong> April 2026</p>
          
          <p>Your privacy is important to us. It is Synkturt's policy to respect your privacy regarding any information we may collect from you across our website and other sites we own and operate.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Information we collect</h2>
          <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
          <p>Information we collect may include:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Email address and name (for account creation).</li>
            <li>The text you input for speech synthesis (processed ephemerally during requests).</li>
            <li>Usage data and cookies to improve the experience.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Data Retention</h2>
          <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Third-Party Services</h2>
          <p>We may employ third-party companies and individuals on our websites—for example, analytics providers and artificial intelligence speech engines. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
        </div>
      </div>
    </div>
  );
}
