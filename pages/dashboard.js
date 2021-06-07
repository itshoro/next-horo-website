import { InnerSection } from "@/components/containers/Section";
import { TopTracks } from "@/components/spotify";
import { AniListCard, GithubCard } from "@/components/stats/StatCard/";

import { Text } from "@itshoro/miuri-components";

const Dashboard = () => (
  <>
    <InnerSection className="mt-24">
      <Text color="foreground" className="text-4xl" weight="bold" as="h1">
        Dashboard
      </Text>

      <Text as="p" color="secondary">
        I’m tracking some interesting and sometimes just nerdy stats about
        myself, this is realized through custom routes and is inspired by{" "}
        <a
          href="https://leerob.io/dashboard"
          className="font-medium hover:px-2 hover:py-1 focus:px-2 focus:py-1 underline rounded-md text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-all"
        >
          Lee Robinson's dashboard
        </a>
        .
      </Text>
    </InnerSection>
    <InnerSection className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GithubCard />
        <AniListCard />
      </div>
    </InnerSection>
    <InnerSection className="py-8 space-y-2">
      <Text
        as="h2"
        weight="bold"
        className="pb-2 mb-2 text-xl"
        color="foreground"
        style={{ lineHeight: "1.1" }}
      >
        Favorite Songs of the Month
      </Text>
      <div className="space-y-2">
        <TopTracks />
      </div>
    </InnerSection>
  </>
);

export default Dashboard;
