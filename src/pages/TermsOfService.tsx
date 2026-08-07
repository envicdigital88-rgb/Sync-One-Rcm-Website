import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export function TermsOfService() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}>
      <div className="space-y-6 text-navy-700 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-navy-900 [&>h2]:mt-10 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-navy-800 [&>h3]:mt-8 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>a]:text-gold-600 [&>a]:underline">
        <p>
          Welcome to SyncOne RCM. These terms of service outline the rules and regulations for the use of SyncOne RCM's Website, located at synconercm.com.
        </p>
        <p>
          By accessing this website, we assume you accept these terms of service. Do not continue to use SyncOne RCM if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2>1. Services</h2>
        <p>
          SyncOne RCM provides revenue cycle management services to healthcare organizations. The content on this Website is for informational purposes only and does not constitute professional advice or a formal service agreement. Actual engagements are governed by separate master service agreements (MSAs) and business associate agreements (BAAs).
        </p>

        <h2>2. Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these Terms, SyncOne RCM and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
        </p>

        <h2>3. Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>Publishing any Website material in any other media without prior consent.</li>
          <li>Selling, sublicensing, and/or otherwise commercializing any Website material.</li>
          <li>Publicly performing and/or showing any Website material.</li>
          <li>Using this Website in any way that is or may be damaging to this Website.</li>
          <li>Using this Website in any way that impacts user access to this Website.</li>
          <li>Using this Website contrary to applicable laws and regulations, or in any way that may cause harm to the Website, or to any person or business entity.</li>
        </ul>

        <h2>4. No Warranties</h2>
        <p>
          This Website is provided "as is," with all faults, and SyncOne RCM expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          In no event shall SyncOne RCM, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. SyncOne RCM, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
        </p>

        <h2>6. Variation of Terms</h2>
        <p>
          SyncOne RCM is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
        </p>

        <h2>7. Governing Law & Jurisdiction</h2>
        <p>
          These Terms will be governed by and interpreted in accordance with the laws of the applicable jurisdiction, and you submit to the non-exclusive jurisdiction of the state and federal courts located in for the resolution of any disputes.
        </p>
      </div>
    </LegalPageLayout>
  );
}
