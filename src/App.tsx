import HeroSection from './components/hero-section';
import { ExpandYourEntrepriseSection } from './components/expand-your-entreprise-section';
import DeployOnceDeliverEverywhereSection from './components/deploy-once-deliver-everywhere-section';
import FrameworksSection from './components/frameworks-section';
import ReliabilitySection from './components/reliability-section';
import { DeployYourFirstAppSection } from './components/deploy-your-first-app-section';
import { CallToAction } from './components/call-to-action';
import Footer from './components/footer';
import { Navbar } from './components/app-navbar';
import AnaylticsSection from './components/analytics-section';
import RollbackSection from './components/rollback-section';

function App() {
  return (
    <div className="bg-black pt-20 sm:pt-32 h-auto">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:max-w-6xl pb-10 sm:pb-20 border-2 border-gray-300/10">
        <div className="border-b-2 border-gray-300/10 mb-3 sm:mb-5">
          <HeroSection />
        </div>
        <AnaylticsSection />
        <RollbackSection />
        <ExpandYourEntrepriseSection />
        <DeployOnceDeliverEverywhereSection />
        <FrameworksSection />
        <ReliabilitySection />
        <DeployYourFirstAppSection />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}

export default App;
