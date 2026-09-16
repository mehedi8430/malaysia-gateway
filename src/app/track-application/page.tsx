import { buildDemoLookup } from "@/lib/tracking";
import HomeFooter from "@/components/home/HomeFooter";
import HomeHeader from "@/components/home/HomeHeader";
import TrackHero from "@/app/track-application/_conponents/TrackHero";
import TrackSearch from "@/app/track-application/_conponents/TrackSearch";
import ProcessMap from "@/app/track-application/_conponents/ProcessMap";
import HelpBanner from "@/app/track-application/_conponents/HelpBanner";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function TrackApplicationPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const trackingId =
    typeof params.trackingId === "string" ? params.trackingId : "";
  const phone = typeof params.phone === "string" ? params.phone : "";

  const initialState =
    trackingId && phone ? buildDemoLookup(trackingId, phone) : null;

  return (
    <>
      <HomeHeader />
      <main>
        <TrackHero />
        <TrackSearch initialState={initialState} />
        <ProcessMap />
        <HelpBanner />
      </main>
      <HomeFooter />
    </>
  );
}