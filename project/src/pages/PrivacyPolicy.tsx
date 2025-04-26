import React, { useEffect } from 'react';
import { Shield, Check } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy is our top priority. Learn how we handle your data.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Last updated: June 15, 2025
          </div>
        </div>
        
        {/* Privacy Highlights */}
        <div className="max-w-3xl mx-auto mb-12 bg-blue-50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Privacy at a Glance
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                <Check className="h-5 w-5" />
              </div>
              <p className="ml-2 text-gray-700">
                <strong>Local Processing:</strong> All image processing happens directly in your browser. Your images never leave your device.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                <Check className="h-5 w-5" />
              </div>
              <p className="ml-2 text-gray-700">
                <strong>No Storage:</strong> We do not store or have access to any of the images you upload or process.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                <Check className="h-5 w-5" />
              </div>
              <p className="ml-2 text-gray-700">
                <strong>Minimal Data Collection:</strong> We only collect anonymous usage data to improve our service.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                <Check className="h-5 w-5" />
              </div>
              <p className="ml-2 text-gray-700">
                <strong>No Ads:</strong> We don't show ads and don't share any data with advertisers.
              </p>
            </li>
          </ul>
        </div>
        
        {/* Policy Content */}
        <div className="max-w-3xl mx-auto prose prose-blue">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to ResizeHub ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This policy outlines our data handling practices.
            </p>
            <p>
              By using ResizeHub, you agree to the collection and use of information in accordance with this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">2. Information Collection and Use</h2>
            <p>
              <strong>Local Processing:</strong> All image processing occurs entirely within your web browser. Your images and files are never transferred to our servers.
            </p>
            <p>
              <strong>Usage Data:</strong> We collect anonymous usage data, such as:
            </p>
            <ul>
              <li>Pages visited</li>
              <li>Time spent on the site</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring/exit pages</li>
            </ul>
            <p>
              This information helps us improve our website and user experience. It does not personally identify you.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
            <p>
              We use cookies to enhance your experience on our site. These are small files stored on your device that help us analyze site usage and remember your preferences.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of our site may not function properly without cookies.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">4. Service Providers</h2>
            <p>
              We may employ third-party companies and individuals for the following reasons:
            </p>
            <ul>
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            <p>
              These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">6. Children's Privacy</h2>
            <p>
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us so that we can take necessary actions.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <a href="mailto:privacy@resizehub.com" className="text-blue-600 hover:text-blue-800">
                privacy@resizehub.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;