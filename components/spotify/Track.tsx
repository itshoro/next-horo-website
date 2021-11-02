import { Text } from "@/components/text";
import { Entity } from "@/components/entity";
import Image from "next/image";
import { Url } from "url";

const Track = ({
  artists,
  artistsUrl,
  imageSrc,
  songUrl,
  title,
  loading = false,
}: TrackArgs) => {
  return (
    <article className="border border-accent rounded-lg p-4">
      <Entity loading={loading} className="items-center space-x-4">
        <Entity.Thumbnail className="w-16 h-16">
          {!loading && (
            <Image
              className="flex-shrink-0 rounded-lg overflow-hidden"
              layout="fixed"
              width={64}
              height={64}
              src={imageSrc}
            />
          )}
        </Entity.Thumbnail>

        <Entity.Field
          title={<a href={songUrl as string}>{title}</a>}
          description={<a href={artistsUrl as string}>{artists}</a>}
        />
      </Entity>
    </article>
  );
};

type TrackArgs = {
  artists: string;
  artistsUrl?: string | Url;
  imageSrc: string;
  songUrl?: string | Url;
  title: string;
  loading?: boolean;
};

export default Track;
export type { TrackArgs };
