"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const AboutAcordion = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-primary">
              What is e-learning?
            </AccordionTrigger>
            <AccordionContent className="text-base text-black/80">
              E-learning is an online platform that offers diverse courses
              accessible anytime, anywhere.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-primary">
              How does it work?
            </AccordionTrigger>
            <AccordionContent className="text-base text-black/80">
              Simply sign up, choose a course, and start learning at your own
              pace with our easy-to-use platform.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold text-primary">
              Why choose e-learning?
            </AccordionTrigger>
            <AccordionContent className="text-base text-black/80">
              Our platform provides flexible, accessible education tailored to
              your needs, helping you grow professionally and personally.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold text-primary">
              What types of courses are available?
            </AccordionTrigger>
            <AccordionContent className="text-base text-black/80">
              We offer courses in various fields such as technology, business,
              design, and more to cater to different interests and skill levels.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold text-primary">
              Is there a certificate upon completion?
            </AccordionTrigger>
            <AccordionContent className="text-base text-black/80">
              Yes, upon successfully completing a course, you will receive a
              certificate that you can add to your portfolio or LinkedIn
              profile.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-semibold text-primary">
              How do I track my progress?
            </AccordionTrigger>
            <AccordionContent className="text-base text-black/80">
              Our platform includes a dashboard where you can track your course
              progress, see completed lessons, and review your achievements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-semibold text-primary">
              Can I access the courses on mobile?
            </AccordionTrigger>
            <AccordionContent className="text-base text-black/80">
              Absolutely! Our platform is fully responsive and can be accessed
              on any device, including mobile phones and tablets.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-xl font-semibold text-primary">
              What is the subscription model?
            </AccordionTrigger>
            <AccordionContent className="text-base text-black/80">
              We offer a flexible subscription model that gives you unlimited
              access to all courses for a monthly or annual fee.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-xl font-semibold text-primary">
              Are there any free courses?
            </AccordionTrigger>
            <AccordionContent className="text-base text-black/80">
              Yes, we offer a selection of free courses that you can start with
              to get a feel for the platform before subscribing.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-xl font-semibold text-primary">
              How do I get support if I have issues?
            </AccordionTrigger>
            <AccordionContent className="text-base text-black/80">
              Our support team is available 24/7 via email or live chat to help
              you with any issues or questions you may have.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default AboutAcordion;
