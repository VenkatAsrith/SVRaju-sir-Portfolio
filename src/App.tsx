import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { MetricsSection } from './components/MetricsSection';
import { BiographySection } from './components/BiographySection';
import { TimelineSection } from './components/TimelineSection';
import { AwardsSection } from './components/AwardsSection';
import { ResearchSection } from './components/ResearchSection';
import { PatentsSection } from './components/PatentsSection';
import { PublicationsSection } from './components/PublicationsSection';
import { TeachingMentorshipSection } from './components/TeachingMentorshipSection';
import { LeadershipSection } from './components/LeadershipSection';
import { OutreachSection } from './components/OutreachSection';
import { ResourcesSection } from './components/ResourcesSection';
import { VisionSection } from './components/VisionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { CVModal } from './components/CVModal';
import { AwardItem } from './types';

export const App: React.FC = () => {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="academic-legacy-app">
      {/* Accessibility Skip Link */}
      <a href="#hero" className="skip-link">
        Skip to main academic content
      </a>

      {/* Sticky Editorial Navigation */}
      <Navigation onOpenCV={() => setIsCVOpen(true)} />

      {/* Continuous Scrolling Editorial Flow */}
      <main id="main-content">
        <HeroSection />
        <MetricsSection />
        <BiographySection />
        <TimelineSection />
        <AwardsSection onSelectAward={(award) => setSelectedAward(award)} />
        <ResearchSection />
        <PatentsSection />
        <PublicationsSection />
        <TeachingMentorshipSection />
        <LeadershipSection />
        <OutreachSection />
        <ResourcesSection />
        <VisionSection />
        <ContactSection />
      </main>

      {/* Editorial Footer & Provenance Notes */}
      <Footer />

      {/* Award Citation & Certificate Preview Modal */}
      <CertificateModal
        award={selectedAward}
        onClose={() => setSelectedAward(null)}
      />

      {/* Full Academic CV Summary Modal */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />
    </div>
  );
};

export default App;
