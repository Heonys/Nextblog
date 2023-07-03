import CarouselPage from "@/components/CarouselPage";
import FeaturedPost from "@/components/FeaturedPost";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <section>
      <Profile />
      <FeaturedPost />
      <CarouselPage />
    </section>
  );
}
