import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "../lib/utils";

const faqs = [
  {
    q: "Why are the apples sometimes out of stock?",
    a: "We only sell during the natural harvest season. Once the fresh batch sells out, we wait for the next harvest — no early picking, no cold storage. That's why our apples taste the way they do."
  },
  {
    q: "How fresh are the apples when they arrive?",
    a: "We harvest after you order — your apples were on the tree about two days before they were dispatched. Depending on your city, total time from harvest to door is 3–6 days. No cold storage in between."
  },
  {
    q: "How long do they stay fresh at home?",
    a: "2–3 weeks at room temperature, up to 6 weeks refrigerated. Unlike waxed market apples, ours have natural skin — keep them cool and dry for best taste."
  },
  {
    q: "What if my apples arrive damaged?",
    a: "Message us within 24 hours with a photo and we'll replace your box or refund you — no questions asked. Your freshness is guaranteed on every order."
  },
  {
    q: "Are your apples organic?",
    a: "We're not certified organic, but we farm sustainably with minimal pesticide use. What we guarantee: zero wax, zero artificial ripening, zero chemical coatings."
  },
  {
    q: "Can I order in bulk or for gifting?",
    a: "Yes — weddings, corporate gifts, festivals, resellers. Message our support for custom pricing and packaging."
  }
];

export function Faq() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-green uppercase mb-4 block">FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-dark">
            Questions We <span className="text-stone-500 font-bold">Always Hear</span>
          </h2>
        </div>
        
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <Accordion.Item key={i} value={`item-${i}`} className="border-b border-stone-200">
              <Accordion.Header>
                <Accordion.Trigger className="flex flex-1 items-center justify-between py-6 font-bold text-left text-lg text-brand-dark transition-all hover:text-brand-green group w-full">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 text-stone-400 transition-transform duration-300 ease-out group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-stone-600 text-base font-medium data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="pb-6 leading-relaxed">
                  {faq.a}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        
        <div className="mt-16 bg-stone-50 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-brand-green">
            <MessageCircle size={32} />
          </div>
          <h3 className="text-2xl font-serif font-bold text-brand-dark mb-4">Still have a question?</h3>
          <p className="text-stone-600 mb-8 font-medium">We're real people, not a chatbot.</p>
          <button className="bg-[#25D366] text-white font-bold py-4 px-8 rounded-full hover:bg-[#20b858] transition-colors shadow-md flex items-center gap-2">
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
