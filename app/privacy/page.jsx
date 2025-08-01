export default function Privacy() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: January 2024</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At QueueUp, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#323338] mb-4">Information We Collect</h2>
            <h3 className="text-xl font-medium text-[#323338] mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 text-[#676879] mb-4 space-y-2">
              <li>Email address and name when you create an account</li>
              <li>Profile information you choose to provide</li>
              <li>Communication preferences and settings</li>
            </ul>

            <h3 className="text-xl font-medium text-[#323338] mb-3">Content Information</h3>
            <ul className="list-disc pl-6 text-[#676879] mb-4 space-y-2">
              <li>URLs and metadata of content you add to your queue</li>
              <li>Your content preferences and consumption patterns</li>
              <li>Queue organization and priority settings</li>
            </ul>

            <h3 className="text-xl font-medium text-[#323338] mb-3">Usage Information</h3>
            <ul className="list-disc pl-6 text-[#676879] mb-4 space-y-2">
              <li>App usage patterns and feature interactions</li>
              <li>Device information and technical data</li>
              <li>Calendar integration data (with your permission)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#323338] mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-[#676879] space-y-2">
              <li>Provide and improve our content queue management services</li>
              <li>Generate personalized content suggestions and scheduling</li>
              <li>Send you notifications about suggested content consumption times</li>
              <li>Analyze usage patterns to enhance our AI algorithms</li>
              <li>Communicate with you about service updates and features</li>
              <li>Ensure the security and proper functioning of our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#323338] mb-4">Information Sharing</h2>
            <p className="text-[#676879] leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-[#676879] space-y-2">
              <li>With service providers who help us operate our platform</li>
              <li>When required by law or to protect our legal rights</li>
              <li>In connection with a business transfer or acquisition</li>
              <li>With your explicit consent for specific purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#323338] mb-4">Data Security</h2>
            <p className="text-[#676879] leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 text-[#676879] space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure hosting and infrastructure management</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#323338] mb-4">Your Rights</h2>
            <p className="text-[#676879] leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-[#676879] space-y-2">
              <li>Access and review your personal data</li>
              <li>Correct or update inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Export your data in a portable format</li>
              <li>Opt-out of certain data processing activities</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#323338] mb-4">Data Retention</h2>
            <p className="text-[#676879] leading-relaxed">
              We retain your personal information only as long as necessary to provide our services and fulfill the purposes outlined in this policy. When you delete your account, we will delete your personal information within 30 days, except where we are required to retain certain information for legal or regulatory purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#323338] mb-4">Third-Party Integrations</h2>
            <p className="text-[#676879] leading-relaxed mb-4">
              QueueUp may integrate with third-party services (such as calendar applications) to provide enhanced functionality. These integrations are subject to the privacy policies of the respective third parties. We encourage you to review these policies before connecting your accounts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#323338] mb-4">Changes to This Policy</h2>
            <p className="text-[#676879] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after any changes indicates your acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#323338] mb-4">Contact Us</h2>
            <p className="text-[#676879] leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-[#f6f7fb] p-4 rounded-lg">
              <p className="text-[#676879] mb-2"><strong>Email:</strong> privacy@queueup.com</p>
              <p className="text-[#676879] mb-2"><strong>Address:</strong> QueueUp Privacy Team</p>
              <p className="text-[#676879]">123 Tech Street, San Francisco, CA 94105</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}