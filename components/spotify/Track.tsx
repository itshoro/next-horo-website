import { Text } from "@/components/text";
import { Entity } from "@/components/entity";
import Image from "next/image";
import { Url } from "url";
import { FC } from "react";
import { HoverArrow } from "../Card/project";

const Track: FC<TrackArgs> = ({
  artists,
  artistsUrl,
  imageSrc,
  songUrl,
  title,
  loading = false,
}) => {
  return (
    <article className="bg-accent rounded-2xl px-6 py-4 sm:p-4 sm:pr-6 max-w-full">
      <Entity
        loading={loading}
        className="flex-col sm:flex-row items-center gap-4"
      >
        <Entity.Thumbnail className="w-16 h-16">
          {!loading && (
            <Image
              className="flex-shrink-0 rounded-lg overflow-hidden w-8 h-8"
              width={64}
              height={64}
              src={imageSrc}
              alt=""
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
