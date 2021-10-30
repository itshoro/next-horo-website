import { InnerSection } from "@/components/containers/Section";
import { TopTracks } from "@/components/spotify";
import { AniListCard, GithubCard } from "@/components/stats/StatCard/";

import { Text } from "@/components/text";
import { Link } from "@/components/link";

const Dashboard = () => (
  <>
    <InnerSection className="mt-24">
      <Text color="foreground" className="text-4xl" weight="bold" as="h1">
        Dashboard
      </Text>

      <Text as="p" color="secondary">
        I’m tracking some interesting and sometimes just nerdy stats about
        myself, this is realized through custom routes and is inspired by{" "}
        <Link href="https://leerob.io/dashboard">Lee Robinson's dashboard</Link>
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
