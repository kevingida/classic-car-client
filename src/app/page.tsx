import Category from "./components/Category/Category";
import Hero from "./components/Hero/Hero";
import Story from "./components/Story/Story";

export default function Home() {
  return (
    <main>
      <Hero
        heading="CLASSIC CAR DEALER"
        message="Quality never goes out of style"
      />
      <Category />
      <Story
        heading1="SUPPLYING THE FINEST CLASSIC CAR"
        message="Classic Car Dealer is the longest standing and are specialists in the international sale of rare classiccars."
      />
    </main>
  );
}
