import { Carousell, CarousellItems } from "../containers";
import date from "date-and-time";

const Timeline = ({
  areas,
}: {
  areas: { title: string; entries: TimelineAreaEntryArgs[] }[];
}) => {
  const caroussels = areas.map(({ title, entries }) => {
    return [title, <TimelineArea entries={entries} />];
  });

  return (
    <>
      {caroussels.map(([title, entries]) => {
        return (
          <section className="hover:bg-white hover:bg-opacity-5 md:hover:bg-transparent transition-colors">
            <div className="pt-6 pb-4">
              <h3 className="text-[#b7b7b7] px-6 lg:px-0 sm:px-12 mb-2">
                {title}
              </h3>
              <Carousell
                direction="x"
                className="py-2 snap-px-6 sm:snap-px-12 lg:snap-px-0"
                align="start"
                type="mandatory"
                items={entries}
              />
            </div>
          </section>
        );
      })}
    </>
  );
};

const TimelineArea = ({ entries }: { entries: TimelineAreaEntryArgs[] }) => {
  return (
    <CarousellItems className="space-x-12 px-6 lg:px-0 sm:px-12 lg:space-x-0 lg:space-y-8 lg:flex-col lg:w-full">
      {entries.map((entry_data) => {
        return <TimelineAreaEntry {...entry_data} />;
      })}
    </CarousellItems>
  );
};

function ResolveIcon(type: EntryType) {
  switch (type) {
    case EntryType.EDUCATION:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="url(#b)"
        >
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      );

    case EntryType.WORK:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="url(#b)"
        >
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      );
  }
}

const TimelineAreaEntry = ({
  institution,
  date_start,
  date_end,
  type,
  description,
  major,
}: TimelineAreaEntryArgs) => {
  const descriptionIcon = ResolveIcon(type);

  return (
    <article className="whitespace-nowrap lg:w-full">
      <div className="pb-6 lg:px-0 space-y-2 lg:flex lg:justify-between lg:pb-2">
        <div className="text-white font-bold">{institution}</div>
        <div className="text-xs text-[#4F4F4F]">
          {date_start && date.format(new Date(date_start), "MMM YYYY")}
          {date_start !== null && date_end !== null && <> &ndash; </>}
          {date_end ? date.format(new Date(date_end), "MMM YYYY") : "Present"}
          {type === EntryType.EDUCATION && <> &middot; {major}</>}
        </div>
      </div>
      {description && (
        <div className="inline-flex rounded-lg py-1 px-3 select-none cursor-default text-[#b7b7b7] border border-white border-opacity-10 hover:bg-opacity-10 hover:border-transparent hover:bg-white hover:text-white transition-colors text-xs items-center gap-1 lg:border-none lg:px-0 lg:hover:bg-transparent">
          {descriptionIcon}
          {description}
        </div>
      )}
    </article>
  );
};

enum EntryType {
  WORK = "WORK",
  EDUCATION = "EDUCATION",
}

type TimelineAreaEntryArgs = {
  institution: string;
  date_start?: string;
  date_end?: string;
  description?: string;
  type: EntryType;
  major?: string;
};

export { Timeline, TimelineArea, TimelineAreaEntry };
