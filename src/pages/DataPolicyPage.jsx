import SubpageLayout from '../components/SubpageLayout'
import { PageSection, PageContainer } from '../components/Section'
import { useTheme } from '../ThemeContext'

export default function DataPolicyPage() {
  const { light } = useTheme()

  const heading = light ? 'text-gray-900' : 'text-white'
  const sub = light ? 'text-gray-700' : 'text-gray-300'
  const muted = light ? 'text-gray-500' : 'text-gray-500'
  const divider = light ? 'border-gray-200' : 'border-gray-800'

  return (
    <SubpageLayout>
      <PageSection standalone>
        <PageContainer className="text-left max-w-3xl">
          <h1 className={`text-3xl font-black mb-2 ${heading}`}>Privacy Policy</h1>
          <p className={`text-sm mb-10 ${muted}`}>Last updated: June 2026</p>

          <div className={`space-y-8 text-sm leading-relaxed ${sub}`}>
            <section>
              <h2 className={`text-base font-bold mb-2 ${heading}`}>1. Controller</h2>
              <p>
                The controller within the meaning of the General Data Protection Regulation (GDPR) is:<br /><br />
                Powerwise.AI<br />
                Floor 2<br />
                Veilchengasse 2<br />
                94469 Deggendorf <br/>
                Germany <br/>
                Email: <a href="mailto:info@powerwise.ai" className="text-green-500 hover:underline">info@powerwise.ai</a>
              </p>
            </section>

            <hr className={divider} />

            <section>
              <h2 className={`text-base font-bold mb-2 ${heading}`}>2. Collection and Storage of Personal Data</h2>
              <p>
                When you visit our website, information is automatically sent to our web server. This information
                is temporarily stored in a so-called log file. The following data is collected without any action
                on your part and retained until it is automatically deleted:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>IP address of the requesting device</li>
                <li>Date and time of access</li>
                <li>Name and URL of the requested file</li>
                <li>Website from which access was made (referrer URL)</li>
                <li>Browser used and, if applicable, the operating system</li>
              </ul>
              <p className="mt-3">
                The data listed above is processed by us for the following purposes: ensuring a smooth connection
                to the website, and evaluating system security and stability. The legal basis for data processing
                is Art. 6(1)(f) GDPR.
              </p>
            </section>

            <hr className={divider} />

            <section>
              <h2 className={`text-base font-bold mb-2 ${heading}`}>3. Contact Form</h2>
              <p>
                If you send us enquiries via the contact form, your details from the enquiry form, including the
                contact information you provided, will be stored by us for the purpose of processing your request
                and in case of follow-up questions. We do not share this data without your consent.
              </p>
              <p className="mt-3">
                The processing of data entered in the contact form is therefore carried out exclusively on the
                basis of your consent (Art. 6(1)(a) GDPR).
              </p>
            </section>

            <hr className={divider} />

            <section>
              <h2 className={`text-base font-bold mb-2 ${heading}`}>4. Cookies</h2>
              <p>
                This website uses only technically necessary cookies required for the operation of the site
                (e.g. theme preference). No tracking or marketing cookies are used.
                Consent is not required for these cookies (§ 25(2) TTDSG).
              </p>
            </section>

            <hr className={divider} />

            <section>
              <h2 className={`text-base font-bold mb-2 ${heading}`}>5. Your Rights</h2>
              <p>You have the following rights with respect to your personal data:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Right of access (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restriction of processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object to processing (Art. 21 GDPR)</li>
              </ul>
              <p className="mt-3">
                You also have the right to lodge a complaint with a data protection supervisory authority
                regarding the processing of your personal data by us.
              </p>
            </section>

            <hr className={divider} />

            <section>
              <h2 className={`text-base font-bold mb-2 ${heading}`}>6. Currency and Amendment of this Privacy Policy</h2>
              <p>
                This privacy policy is currently valid and was last updated in June 2026. As our website evolves
                or due to changes in legal or regulatory requirements, it may be necessary to amend this policy.
              </p>
            </section>
          </div>
        </PageContainer>
      </PageSection>
    </SubpageLayout>
  )
}
