import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Stock your library with BerryBooks"
      subtitle="Get your free trial device"
      button={
        <Link href="mailto:info@berrybook.co">
          <a>
            <Button>Learn more</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
