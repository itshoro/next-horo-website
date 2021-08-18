import { Text } from "@/components/text";
import { Entity } from "@/components/entity";
import Image from "next/image";

const Track = ({
  artists,
  artistsUrl,
  imageSrc,
  songUrl,
  title,
  loading = false,
}) => {
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
          title={<a href={songUrl}>{title}</a>}
          description={<a href={artistsUrl}>{artists}</a>}
        />
      </Entity>
    </article>
  );
};

export default Track;
