
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a rotating savings group?",
    answer: "A rotating savings group (also known as 'Esusu' in Nigeria, 'Tanda' in Mexico, or 'ROSCA' globally) is a group of individuals who contribute a fixed amount of money at regular intervals. The total collected amount is given to one member at a time on a rotating basis until all members have received a payout."
  },
  {
    question: "How secure is EsusuChain?",
    answer: "EsusuChain prioritizes security with end-to-end encryption for all user data, secure payment confirmation processes, and transparent record-keeping that all members can verify. We do not store actual bank details on our platform."
  },
  {
    question: "Can I be in multiple savings groups?",
    answer: "Yes! You can create or join multiple savings groups with different members, contribution amounts, and payout cycles according to your saving goals and financial capacity."
  },
  {
    question: "What happens if someone doesn't contribute?",
    answer: "EsusuChain provides tools for group administrators to manage non-payment situations, including automated reminders and visibility into payment statuses. Groups can also establish their own rules for handling missed contributions."
  },
  {
    question: "How do I determine my payout position?",
    answer: "When setting up or joining a group, you can select your preferred position in the payout cycle, subject to availability. Positions are typically assigned on a first-come, first-served basis, with the group creator having the option to assign positions."
  },
  {
    question: "Is there a fee to use EsusuChain?",
    answer: "EsusuChain offers a free basic plan that includes essential features for managing rotating savings groups. We also offer premium features for a small monthly subscription that includes advanced analytics, increased group sizes, and priority support."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Find answers to common questions about EsusuChain and rotating savings groups.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
