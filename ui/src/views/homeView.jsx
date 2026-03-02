import HeroSection from "@components/home/heroSection";
import HomeScreen from "@components/home/homeScreen";
import HomeRepair from "@components/home/homeRepair";

const HomeView = () => {
  return (
    <div style={{ height: "100%" }}>
      <HeroSection />
      <HomeScreen />
      <HomeRepair />
    </div>
  );
};

export default HomeView;
