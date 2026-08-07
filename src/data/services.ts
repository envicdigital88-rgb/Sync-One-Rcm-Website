export type Service = {
  title: string;
  icon:
  'billing' |
  'coding' |
  'verification' |
  'denial' |
  'ar' |
  'analytics';
  description: string;
  points: string[];
};

export const services: Service[] = [
{
  title: 'Medical Billing',
  icon: 'billing',
  description:
  'End-to-end charge entry, claim submission, and payment posting with disciplined daily reconciliation.',
  points: ['Charge entry & scrubbing', 'Electronic claim submission', 'Payment posting']
},
{
  title: 'Medical Coding',
  icon: 'coding',
  description:
  'Certified, specialty-aware coding that protects reimbursement and keeps documentation audit-ready.',
  points: ['ICD-10 / CPT / HCPCS', 'Specialty coding review', 'Coding audit support']
},
{
  title: 'Insurance Verification',
  icon: 'verification',
  description:
  'Front-end eligibility, benefits, and authorization checks that stop denials before the visit.',
  points: ['Eligibility & benefits', 'Prior authorization', 'Patient estimates']
},
{
  title: 'Denial Management',
  icon: 'denial',
  description:
  'Root-cause analysis, structured appeals, and prevention loops back into front-end workflows.',
  points: ['Root-cause tracking', 'Appeals & reconsiderations', 'Prevention playbooks']
},
{
  title: 'AR Recovery',
  icon: 'ar',
  description:
  'Aging-based worklists and payer follow-up that shorten days in A/R and recover aged balances.',
  points: ['Aging prioritization', 'Payer follow-up', 'Old A/R clean-up']
},
{
  title: 'Healthcare Analytics',
  icon: 'analytics',
  description:
  'Transparent reporting on collections, denials, and productivity with actionable recommendations.',
  points: ['KPI dashboards', 'Payer performance', 'Monthly reviews']
}];