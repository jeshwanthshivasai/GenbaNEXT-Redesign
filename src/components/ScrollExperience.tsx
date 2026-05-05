'use client';

import { useState } from 'react';
import TopNav, { type Lang } from './TopNav';
import HeroSection from './HeroSection';
import ManifestoSection from './ManifestoSection';
import Marquee from './Marquee';
import CircularEconomy from './CircularEconomy';
import PlatformsSection from './PlatformsSection';
import GeographySection from './GeographySection';
import AudienceSection from './AudienceSection';
import FooterSection from './FooterSection';

export default function ScrollExperience() {
  const [lang, setLang] = useState<Lang>('EN');

  return (
    <>
      <TopNav lang={lang} setLang={setLang} />
      <main>
        <HeroSection />
        <ManifestoSection />
        <Marquee />
        <CircularEconomy />
        <PlatformsSection />
        <GeographySection />
        <AudienceSection />
        <FooterSection lang={lang} setLang={setLang} />
      </main>
    </>
  );
}
