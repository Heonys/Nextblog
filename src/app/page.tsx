import Profile from "@/components/Profile";
import FeaturedPost from "@/components/FeaturedPost";
import CaroucelPost from "@/components/CaroucelPost";

export default function HomePage() {
  return (
    <main>
      <Profile />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPost />
      {/* @ts-expect-error Async Server Component */}
      <CaroucelPost />
    </main>
  );
}
