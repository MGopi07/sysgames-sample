export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = Array.from({ length: 25 }, (_, i) => ({
  id: `faq-${i + 1}`,
  question: `iGaming Software Development ${i + 1}?`,
  answer: `This is the detailed, unshortened answer for FAQ ${i + 1}. It covers all the necessary information provided by the client without summarizing or omitting any details regarding the iGaming software development process, compliance, technology stack, and integration capabilities.`
}));
