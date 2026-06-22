import SubpageLayout from '../components/SubpageLayout'
import { PageSection, PageContainer } from '../components/Section'
import { useTheme } from '../ThemeContext'

export default function ImprintPage() {
  const { light } = useTheme()

  const heading = light ? 'text-gray-900' : 'text-white'
  const sub = light ? 'text-gray-700' : 'text-gray-300'
  const muted = light ? 'text-gray-500' : 'text-gray-500'
  const divider = light ? 'border-gray-200' : 'border-gray-800'

  return (
    <SubpageLayout>
      <PageSection standalone>
        <PageContainer className="text-left max-w-3xl">
          <h1 className={`text-3xl font-black mb-2 ${heading}`}>Legal Notice</h1>
          <p className={`text-sm mb-10 ${muted}`}>Information pursuant to § 5 TMG</p>

          <div className={`space-y-8 text-sm leading-relaxed ${sub}`}>
            <section>
              <h2 className={`text-base font-bold mb-2 ${heading}`}>Responsible</h2>
              <p>
                Powerwise.AI<br />
                Floor 2<br />
                Veilchengasse 2<br />
                94469 Deggendorf <br/>
                Germany
              </p>
            </section>

            <hr className={divider} />

            <section>
              <h2 className={`text-base font-bold mb-2 ${heading}`}>Contact</h2>
              <p>
                Email: <a href="mailto:info@powerwise.ai" className="text-green-500 hover:underline">info@powerwise.ai</a>
              </p>
              <p>
                Phone: +49 9913 6150
              </p>
            </section>

            <hr className={divider} />

            <section>
              <h2 className={`text-base font-bold mb-2 ${heading}`}>Liability for Content</h2>
              <p>
                As a service provider, we are responsible for our own content on these pages in accordance with
                general laws pursuant to § 7(1) TMG. However, pursuant to §§ 8 to 10 TMG, we are not obligated
                as a service provider to monitor transmitted or stored third-party information or to investigate
                circumstances that indicate illegal activity.
              </p>
              <p className="mt-3">
                Obligations to remove or block the use of information under general laws remain unaffected.
                However, liability in this regard is only possible from the point in time at which a concrete
                legal violation becomes known. Upon becoming aware of such violations, we will remove the
                relevant content immediately.
              </p>
            </section>

            <hr className={divider} />

            <section>
              <h2 className={`text-base font-bold mb-2 ${heading}`}>Liability for Links</h2>
              <p>
                Our website contains links to external third-party websites over whose content we have no
                control. Therefore, we cannot accept any liability for such external content. The respective
                provider or operator of the linked pages is always responsible for their content.
              </p>
            </section>

            <hr className={divider} />

            <section>
              <h2 className={`text-base font-bold mb-2 ${heading}`}>Copyright</h2>
              <p>
                The content and works created by the site operators on these pages are subject to German
                copyright law. Reproduction, editing, distribution, and any kind of use beyond the limits of
                copyright law require the written consent of the respective author or creator.
              </p>
            </section>
          </div>
        </PageContainer>
      </PageSection>
    </SubpageLayout>
  )
}
