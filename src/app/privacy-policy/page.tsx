import type { Metadata } from "next";
import { site } from "@/content/global/site";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Essence Medspa collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
            {/* 1. Introduction */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                1. Introduction
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                This Privacy Policy describes how {site.name} (&ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and
                protects the personal information you provide when visiting our
                website at{" "}
                <a
                  href={site.url}
                  className="text-essence-accent hover:underline"
                >
                  {site.url}
                </a>{" "}
                or when interacting with our services. By using our site, you
                consent to the practices described in this policy.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                We may collect personal information that you voluntarily provide,
                including your name, email address, phone number, and any
                details submitted through our contact or inquiry forms. When you
                book an appointment, we may also collect booking preferences and
                scheduling details via our booking platform. Additionally, we
                collect certain technical information automatically, such as
                browser type, IP address, pages visited, and referring URLs,
                through cookies and similar tracking technologies.
              </p>
            </div>

            {/* 3. How We Use Your Information */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                We use the information we collect to respond to your inquiries,
                schedule and manage appointments, provide the services you
                request, and send confirmations or reminders related to your
                bookings. With your explicit consent, we may also send you
                promotional communications about our treatments, offers, and
                wellness tips. You may opt out of marketing communications at
                any time.
              </p>
            </div>

            {/* 4. HIPAA Compliance */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                4. HIPAA Compliance
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                We take the privacy of your health information seriously. Any
                medical or treatment-related information you share with our
                licensed providers is handled in accordance with the Health
                Insurance Portability and Accountability Act (HIPAA). Your
                treatment records and protected health information (PHI) are
                maintained separately from general website data and are accessed
                only by authorized staff involved in your care.
              </p>
            </div>

            {/* 5. Sharing of Information */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                5. Sharing of Information
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                We do not sell, rent, or trade your personal information to third
                parties. We may share your data only as necessary with trusted
                service providers who assist us in operating our business,
                including payment processors for transaction handling and our
                online booking platform, Vagaro, for appointment management.
                These third parties are contractually obligated to keep your
                information confidential and to use it only for the purposes we
                specify.
              </p>
            </div>

            {/* 6. Cookies & Tracking */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                6. Cookies &amp; Tracking
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                Our website uses cookies and similar technologies to analyze site
                traffic, understand how visitors use our site, and improve your
                browsing experience. We use analytics tools (such as Google
                Analytics) for aggregate, non-personally identifiable insights.
                We do not engage in targeted advertising and will not deploy
                advertising cookies without your explicit consent. You can
                control cookie preferences through your browser settings.
              </p>
            </div>

            {/* 7. Your Rights */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                7. Your Rights
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                You have the right to access, correct, or request deletion of
                the personal information we hold about you. To exercise any of
                these rights, please contact us using the information below. We
                will respond to verified requests within a reasonable timeframe
                and in accordance with applicable law. Illinois residents may
                have additional rights under state privacy regulations.
              </p>
            </div>

            {/* 8. Contact */}
            <div>
              <h2 className="font-display text-2xl text-essence-white mt-12 mb-4">
                8. Contact
              </h2>
              <p className="text-[1rem] leading-[1.9] text-essence-white-off">
                If you have questions, concerns, or requests regarding this
                Privacy Policy or your personal data, please contact us at:
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
