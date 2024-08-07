import Header from "./_components/Header";
import ImageSide from "./_components/ImageSide";
import Navigation from "./_components/Navigation";
import { NavigationProvider } from "./_components/NavigationContext";

export const revalidate = 0;

export default async function Home() {
  const res = await fetch(
    "https://outsource-services-project-strapi.onrender.com/api/navigations"
  );
  const res2 = await fetch(
    "https://outsource-services-project-strapi.onrender.com/api/landings"
  );

  const data = await res.json();
  const data2 = await res2.json();
  console.log(data);

  return (
    <div className="flex flex-col justify-center gap-20 py-10 items-center">
      <Header data={data2} />
      <div className="flex justify-around w-full">
        {/* <div className="grid grid-cols-[1fr_0.5fr] w-full"> */}

        <NavigationProvider>
          <ImageSide data={data} />
          <Navigation data={data} />
        </NavigationProvider>
      </div>
    </div>
  );
}
