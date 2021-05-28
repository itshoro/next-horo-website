import { InnerSection } from "@/components/containers/Section";
import { TopTracks } from "@/components/spotify";
import { AniListCard, GithubCard } from "@/components/stats/StatCard/";

const Dashboard = () => (
  <>
    <InnerSection className="mt-24">
      <h1
        className="font-bold text-white text-4xl pb-2 mb-2"
        style={{ lineHeight: "1.1" }}
      >
        Dashboard
      </h1>

      <p>
        I’m tracking some interesting and sometimes just nerdy stats about
        myself, this is realized through custom routes and is inspired by{" "}
        <a
          href="https://leerob.io/dashboard"
          className="font-medium hover:px-2 hover:py-1 focus:px-2 focus:py-1 underline rounded-md text-white focus:bg-white focus:bg-opacity-5 hover:bg-white hover:bg-opacity-5 transition-all"
        >
          Lee Robinson's dashboard
        </a>
        .
      </p>
    </InnerSection>
    <InnerSection className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <GithubCard />
        <AniListCard />
      </div>
    </InnerSection>
    <InnerSection className="py-8 space-y-2">
      <h2
        className="font-bold text-white text-xl pb-2 mb-2"
        style={{ lineHeight: "1.1" }}
      >
        Favorite Songs of the Month
      </h2>
      <div className="space-y-2">
        <TopTracks />
      </div>
    </InnerSection>
  </>
);

export default Dashboard;
