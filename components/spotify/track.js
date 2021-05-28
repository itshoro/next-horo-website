import Image from "next/image";

const Track = ({
  artists,
  artistsUrl,
  images,
  songUrl,
  title,
  loading = false,
}) => (
  <article className="border border-offblack rounded-lg p-4">
    <div className="flex items-center">
      <div
        className={[
          loading && "skeleton w-16 h-16",
          "flex-shrink-0 rounded-lg overflow-hidden",
        ]
          .filter((x) => x)
          .join(" ")}
      >
        {!loading && (
          <Image
            className=""
            layout="fixed"
            width={64}
            height={64}
            src={images[2].url}
          />
        )}
      </div>
      <div className="pl-4 flex-1 min-w-0">
        <div
          className={[
            loading ? "skeleton rounded mb-2" : "text-white font-bold",
          ]
            .filter((x) => x)
            .join(" ")}
        >
          <a href={songUrl}>{title}</a>
        </div>
        <div
          className={[loading ? "skeleton rounded" : "truncate text-sm"]
            .filter((x) => x)
            .join(" ")}
        >
          <a href={artistsUrl}>{artists}</a>
        </div>
      </div>
    </div>
  </article>
);

export default Track;
