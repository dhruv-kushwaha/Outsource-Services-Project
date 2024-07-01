import Header from "./_components/Header";
import ImageSide from "./_components/ImageSide";
import Navigation from "./_components/Navigation";
import { NavigationProvider } from "./_components/NavigationContext";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-20 py-10 items-center">
      <Header />
      <div className="flex justify-around w-full">
        {/* <div className="grid grid-cols-[1fr_0.5fr] w-full"> */}

        <NavigationProvider>
          <ImageSide />
          <Navigation />
        </NavigationProvider>
      </div>
    </div>
  );
}
