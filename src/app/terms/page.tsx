import type { Metadata } from "next";
import { site } from "@/content/global/site";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-essence-black pt-40 pb-16">
        <div className="px-page max-w-4xl">
          <Reveal>
            <div className="eyebrow mb-6 inline-flex items-center gap-3 text-essence-accent">
              <span className="h-px w-8 bg-essence-accent" aria-hidden />
              <span>Legal</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-fluid-about leading-[1.05] text-essence-white">
              Terms of Service
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-[0.9rem] text-essence-muted">
              Last updated: April 14, 2026
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="bg-essence-black">
        <div className="px-page max-w-3xl pb-32">
          <div className="space-y-8">
            {/* 1. Acceptance of Terms */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                By accessing or using the website located at{" "}
                <a
                  href={site.url}
                  className="text-essence-accent hover:underline"
                >
                  {site.url}
                </a>{" "}
                or by receiving services from {site.name}, you agree to be bound
                by these Terms of Service. If you do not agree to these terms,
                please do not use our website or services. We reserve the right
                to update these terms at any time, and continued use of our
                site constitutes acceptance of any changes.
              </p>
            </div>

            {/* 2. Services & Treatments */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                2. Services &amp; Treatments
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                {site.name} offers aesthetic, wellness, and therapeutic
                treatments performed by licensed professionals. Individual
                results vary and are not guaranteed. The information provided on
                this website is for general informational purposes only and is
                not a substitute for professional medical advice, diagnosis, or
                treatment. Always consult a qualified healthcare provider with
                any questions you have regarding a medical condition or
                treatment plan.
              </p>
            </div>

            {/* 3. Booking & Cancellations */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                3. Booking &amp; Cancellations
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                Appointments may be booked online via our booking platform at{" "}
                <a
                  href={site.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-essence-accent hover:underline"
                >
                  {site.booking.url}
                </a>
                , or by calling us directly. We require at least 24 hours&rsquo;
                notice for cancellations or rescheduling. Late cancellations or
                no-shows may be subject to a cancellation fee at our discretion.
                Repeated no-shows may result in a prepayment requirement for
                future appointments.
              </p>
            </div>

            {/* 4. Pricing */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                4. Pricing
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                All prices listed on our website and booking platform are subject
                to change without prior notice. The final price for a treatment
                may be modified following a consultation if the scope of service
                differs from the initial booking. Prices shown do not include
                applicable taxes or gratuity, which are the responsibility of
                the client.
              </p>
            </div>

            {/* 5. Liability */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                5. Liability
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                Clients are required to honestly and completely disclose their
                full medical history, current medications, allergies, and any
                relevant health conditions prior to receiving any treatment.
                Failure to do so may affect the safety and suitability of
                services. {site.name} and its providers shall not be liable for
                adverse outcomes resulting from undisclosed health information
                or for results that fall outside the reasonable standard of care.
                Our liability is limited to the cost of the service received.
              </p>
            </div>

            {/* 6. Photography */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                6. Photography
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                We may take before-and-after photographs for treatment
                documentation purposes. Such images will only be used in
                marketing materials, social media, or educational content with
                your explicit written release. You are under no obligation to
                provide a release, and refusal will not affect the quality of
                care you receive.
              </p>
            </div>

            {/* 7. Intellectual Property */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                7. Intellectual Property
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                All content on this website — including text, graphics, logos,
                images, and design elements — is the exclusive property of{" "}
                {site.name} or its licensors and is protected by applicable
                copyright and intellectual property laws. You may not reproduce,
                distribute, or create derivative works from any site content
                without our prior written permission.
              </p>
            </div>

            {/* 8. Governing Law */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                8. Governing Law
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the State of Illinois, without regard
                to conflict of law principles. Any disputes arising under these
                terms shall be subject to the exclusive jurisdiction of courts
                located in Cook County, Illinois.
              </p>
            </div>

            {/* 9. Contact */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                9. Contact
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                Questions about these Terms of Service may be directed to:
              </p>
              <ul className="mt-4 space-y-2 text-[1rem] leading-[1.9] text-essence-white-off">
                <li>
                  <span className="text-essence-white">Email:</span>{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-essence-accent hover:underline"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="text-essence-white">Phone:</span>{" "}
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="text-essence-accent hover:underline"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <span className="text-essence-white">Address:</span>{" "}
                  {site.address.street}, {site.address.city},{" "}
                  {site.address.state} {site.address.zip}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
