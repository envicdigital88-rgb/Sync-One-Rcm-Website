import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';

export function HIPAACompliance() {
  return (
    <LegalPageLayout title="HIPAA Compliance" lastUpdated={new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}>
      <div className="space-y-6 text-navy-700 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-navy-900 [&>h2]:mt-10 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-navy-800 [&>h3]:mt-8 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>a]:text-gold-600 [&>a]:underline">
        <p>
          At SyncOne RCM, safeguarding patient data is not just a regulatory requirement—it is a core foundation of our revenue cycle management services. We are fully committed to complying with the Health Insurance Portability and Accountability Act (HIPAA) of 1996 and the Health Information Technology for Economic and Clinical Health (HITECH) Act.
        </p>

        <h2>1. Business Associate Agreements (BAA)</h2>
        <p>
          As a partner handling billing and revenue cycle processes for healthcare providers, SyncOne RCM operates as a Business Associate. We execute standard Business Associate Agreements (BAAs) with all of our clients, ensuring that our operations are legally bound to protect Protected Health Information (PHI) with the highest level of security.
        </p>

        <h2>2. Administrative Safeguards</h2>
        <ul>
          <li><strong>Security Management Process:</strong> Continuous risk analysis and risk management processes are in place to identify and mitigate potential vulnerabilities.</li>
          <li><strong>Workforce Training:</strong> All employees undergo rigorous, mandatory HIPAA training upon hiring and annually thereafter.</li>
          <li><strong>Information Access Management:</strong> Access to PHI is strictly restricted based on the principle of "minimum necessary" and role-based access controls (RBAC).</li>
        </ul>

        <h2>3. Physical Safeguards</h2>
        <ul>
          <li><strong>Facility Access Controls:</strong> Our operational centers feature robust physical security, including biometric access, CCTV monitoring, and strict visitor logs.</li>
          <li><strong>Workstation Security:</strong> Clean desk policies are enforced. Workstations are physically secured and automatically locked when unattended. External drives and unauthorized devices are strictly prohibited on the network.</li>
        </ul>

        <h2>4. Technical Safeguards</h2>
        <ul>
          <li><strong>Data Encryption:</strong> All PHI transmitted over networks or stored in our systems is encrypted using industry-standard protocols (e.g., AES-256 for data at rest, TLS 1.2+ for data in transit).</li>
          <li><strong>Audit Controls:</strong> We maintain comprehensive access logs and conduct regular audits to monitor interactions with systems containing PHI.</li>
          <li><strong>Secure Communication:</strong> Emails and messaging systems used for client communication involving sensitive data are secured and encrypted.</li>
        </ul>

        <h2>5. Incident Response and Breach Notification</h2>
        <p>
          SyncOne RCM has a comprehensive Incident Response Plan. In the unlikely event of a data breach, we have procedures in place to quickly contain the threat, assess the impact, and notify our clients and relevant authorities as mandated by the HIPAA Breach Notification Rule.
        </p>

        <h2>6. Contact Our Privacy Officer</h2>
        <p>
          If you have any questions about our HIPAA compliance framework or wish to discuss data security, please contact our Compliance Team at: <a href="mailto:hello@synconercm.com">hello@synconercm.com</a>.
        </p>
      </div>
    </LegalPageLayout>
  );
}
