import { Text } from "@/components/text";
import { Entity, EntityField, EntityThumbnail } from "@/components/entity";
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
      <Entity
        className="items-center space-x-4"
        thumbnail={
          <EntityThumbnail className="w-16 h-16" loading={loading}>
            {!loading && (
              <Image
                className="flex-shrink-0 rounded-lg overflow-hidden"
                layout="fixed"
                width={64}
                height={64}
                src={imageSrc}
              />
            )}
          </EntityThumbnail>
        }
      >
        <EntityField
          loading={loading}
          title={
            <Text
              color={loading ? "transparent" : "foreground"}
              weight="bold"
              as="div"
              truncate={true}
            >
              <a href={songUrl}>{title}</a>
            </Text>
          }
          description={
            <Text
              color={loading ? "transparent" : "secondary"}
              as="div"
              className="text-sm"
              truncate={true}
            >
              <a href={artistsUrl}>{artists}</a>
            </Text>
          }
        />
      </Entity>
    </article>
  );
};

export default Track;
