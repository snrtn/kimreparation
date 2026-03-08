import HeroSection from "@components/home/heroSection";
import HomeScreen from "@components/home/homeScreen";
import HomeRepair from "@components/home/homeRepair";
import HomeDevis from "@components/home/homeDevis";
import HomeToy from "@components/home/homeToy";
import HomeInfos from "@components/home/homeInfos";

const HomeView = () => {
  return (
    <div style={{ height: "100%" }}>
      <HeroSection />
      <HomeScreen />
      <HomeRepair />
      <HomeDevis />
      <HomeToy />
      <HomeInfos />
    </div>
  );
};

export default HomeView;
