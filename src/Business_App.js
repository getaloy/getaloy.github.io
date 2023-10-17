
import './css/styles.css'
import './App.css'
import HeroSection from './sections/hero_section';
import BrandsSection from './sections/brands_section';
import CustomerRelationship from './sections/customer_relationship_section';
import RunningProgramSection from './sections/running_program_section';
import BusinessPartnerReviewSection from './sections/business_partner_review_section';
import CommonQuestionsAskedSection from './sections/common_questions_asked';
import TalkUsSection from './sections/talk_us_section';
import FooterSection from './sections/footer_section';


function BusinessApp() {
  return (
    <div className="App">
      <HeroSection />
      <BrandsSection />
      <CustomerRelationship />
      <RunningProgramSection />
      <BusinessPartnerReviewSection />
      <CommonQuestionsAskedSection />
      <TalkUsSection />
      <FooterSection />
    </div>
  );
}

export default BusinessApp;
