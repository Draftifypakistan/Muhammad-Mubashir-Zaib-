import { 
  FileText, 
  Layout, 
  Table, 
  Presentation, 
  Languages, 
  Wrench, 
  UserCircle, 
  Zap 
} from 'lucide-react';

export const BUSINESS_NAME = "Muhammad Mubashir Zaib, Draftify Pakistan";
export const WHATSAPP_NUMBER = "+923000000000"; // Placeholder, but functional format
export const PHONE_NUMBER = "+923000000000";
export const EMAIL = "mubshirzaib@example.com";

export const SERVICES = [
  {
    id: 'drafting',
    title: 'Professional Drafting',
    description: 'Applications, letters, business documents, reports, official requests, notices, agreements, and formal writing.',
    icon: FileText
  },
  {
    id: 'word',
    title: 'MS Word Services',
    description: 'Formatting, page setup, tables, headings, styles, cover pages, assignments, reports, and professional document design.',
    icon: Layout
  },
  {
    id: 'excel',
    title: 'MS Excel Services',
    description: 'Data entry, formulas, tables, charts, basic reports, lists, invoices, and office sheets.',
    icon: Table
  },
  {
    id: 'ppt',
    title: 'PowerPoint Presentations',
    description: 'Professional slides for students, businesses, meetings, assignments, and office use.',
    icon: Presentation
  },
  {
    id: 'urdu',
    title: 'Urdu Typing',
    description: 'Fast and neat Urdu typing, Urdu formatting, applications, letters, notices, and mixed Urdu English documents.',
    icon: Languages
  },
  {
    id: 'it',
    title: 'IT Troubleshooting',
    description: 'Help with computer issues, software problems, printer issues, internet problems, file problems, email support, and basic office IT setup.',
    icon: Wrench
  },
  {
    id: 'cv',
    title: 'CV and Job Documents',
    description: 'CV writing, CV formatting, job applications, cover letters, and professional profiles.',
    icon: UserCircle
  },
  {
    id: 'urgent',
    title: 'Urgent Document Work',
    description: 'Same day document editing, urgent typing, quick formatting, and emergency file correction.',
    icon: Zap
  }
];

export const PORTFOLIO_CATEGORIES = [
  {
    title: 'Word Document Formatting',
    description: 'Professional layouts and stylized reports.'
  },
  {
    title: 'Excel Office Sheets',
    description: 'Automated calculators and organized data sheets.'
  },
  {
    title: 'PowerPoint Slides',
    description: 'Visually engaging presentations for businesses.'
  },
  {
    title: 'Urdu Typing Samples',
    description: 'Clean and readable Urdu/English document writing.'
  },
  {
    title: 'CV Formatting',
    description: 'Modern and professional resumes for job seekers.'
  },
  {
    title: 'Business Letters',
    description: 'Formal correspondence and drafting excellence.'
  },
  {
    title: 'IT Support Cases',
    description: 'Troubleshooting and office tech solutions.'
  }
];

export const FAQS = [
  {
    question: "What services do you provide?",
    answer: "We provide comprehensive document services including professional drafting, Word formatting, Excel work, PowerPoint presentations, Urdu typing, CV formatting, and basic IT troubleshooting."
  },
  {
    question: "Can I send my file online?",
    answer: "Yes! Most of our services are provided online. You can send your requirements or files via WhatsApp or email, and we will handle the rest."
  },
  {
    question: "Do you provide Urdu typing?",
    answer: "Yes, we specialize in fast and professional Urdu typing, including mixed Urdu-English documents and official applications."
  },
  {
    question: "Can you make PowerPoint presentations?",
    answer: "Yes, we design professional slides for students, offices, and business meetings according to your needs."
  },
  {
    question: "Can you fix Excel sheets?",
    answer: "Yes, we can help with data entry, formulas, tables, charts, and creating organized reports in MS Excel."
  },
  {
    question: "Do you provide urgent work?",
    answer: "Yes, we offer urgent document editing, typing, and formatting support for those with tight deadlines."
  },
  {
    question: "How do I know the price?",
    answer: "Simply send us your file or explain your task on WhatsApp. We will provide an affordable price quote and estimated delivery time immediately."
  },
  {
    question: "Do you handle files confidentially?",
    answer: "Absolutely. We treat all client files and personal information with the highest level of confidentiality and care."
  }
];
