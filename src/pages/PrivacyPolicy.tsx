import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}>
      <div className="space-y-6 text-navy-700 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-navy-900 [&>h2]:mt-10 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-navy-800 [&>h3]:mt-8 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>a]:text-gold-600 [&>a]:underline">
        <p>
          At SyncOne RCM, we respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit the website synconercm.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
        </p>

        <h2>1. Information We Collect About You</h2>
        <p>We collect several types of information from and about users of our Website, including information:</p>
        <ul>
          <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information").</li>
          <li>That is about you but individually does not identify you, such as your job title, company name, and industry.</li>
          <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
        <ul>
          <li>To present our Website and its contents to you.</li>
          <li>To provide you with information, products, or services that you request from us.</li>
          <li>To fulfill any other purpose for which you provide it.</li>
          <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
          <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
        </ul>

        <h2>3. Disclosure of Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. As a healthcare RCM provider, we also adhere strictly to HIPAA compliance standards for any Protected Health Information (PHI) handled through our secure client portals and services.
        </p>

        <h2>5. Changes to Our Privacy Policy</h2>
        <p>
          It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page.
        </p>

        <h2>6. Contact Information</h2>
        <p>
          To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:hello@synconercm.com">hello@synconercm.com</a>.
        </p>
      </div>
    </LegalPageLayout>
  );
}
