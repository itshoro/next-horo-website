import { TopTracks } from "@/components/spotify";
import { AniListCard, GithubCard } from "@/components/stats/StatCard/";

import { Text } from "@/components/text";
import { Link } from "@/components/link";

const Dashboard = () => (
  <div className="pt-8 px-6">
    <div className="pt-24 max-w-[64ch] 2xl:max-w-[74ch] mx-auto mb-2">
      <Text color="foreground" weight="semibold" className="text-xl" as="h1">
        Dashboard
      </Text>

      <Text as="p" className="my-4 leading-normal" color="secondary">
        I'm tracking some interesting and sometimes just nerdy stats about
        myself, this is realized through custom routes and is inspired by{" "}
        <Link external={true} href="https://leerob.io/dashboard">
          Lee Robinson's dashboard
        </Link>
        .
      </Text>
    </div>
    <div className="py-8 max-w-[64ch] 2xl:max-w-[74ch] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GithubCard />
        <AniListCard />
      </div>
    </div>
    <div className="py-8 space-y-2 max-w-[64ch] 2xl:max-w-[74ch] mx-auto">
      <Text
        as="h2"
        weight="semibold"
        className="pb-2 mb-2 text-lg"
        color="foreground"
        style={{ lineHeight: "1.1" }}
      >
        Favorite Songs of the Month
      </Text>
      <div className="space-y-2">
        <TopTracks />
      </div>
    </div>
  </div>
);

export default Dashboard;
