import { Carousell } from "../containers";
import date from "date-and-time";

const Timeline = ({
  areas,
}: {
  areas: { title: string; entries: TimelineAreaEntryArgs[] }[];
}) => {
  return (
    <>
      {areas.map(({ title, entries }) => {
        return (
          <section className="hover:bg-white hover:bg-opacity-5 md:hover:bg-transparent transition-colors">
            <div className="pt-6 pb-4">
              <h3 className="text-secondary px-6 lg:px-0 sm:px-12 mb-2">
                {title}
              </h3>
              <Carousell
                scroll={{ direction: "x", type: "mandatory" }}
                className="py-2 scroll-px-6 sm:scroll-px-12 lg:scroll-px-0"
                align={{ x: "start" }}
              >
                <Carousell.Items className="space-x-12 px-6 lg:px-0 sm:px-12 lg:space-x-0 lg:space-y-8 lg:flex-col lg:w-full">
                  {entries.map((entry_data, i) => {
                    return (
                      <TimelineAreaEntry
                        key={"timelineEntry" + i}
                        {...entry_data}
                      />
                    );
                  })}
                </Carousell.Items>
              </Carousell>
            </div>
          </section>
        );
      })}
    </>
  );
};

function ResolveIcon(type: EntryType) {
  switch (type) {
    case EntryType.EDUCATION:
      return (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
            clipRule="evenodd"
          />
        </svg>
      );

    case EntryType.WORK:
      return (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
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
  occupation,
}: TimelineAreaEntryArgs) => {
  const descriptionIcon = ResolveIcon(type);

  if (type === EntryType.TOOL) {
    return (
      <article className="flex flex-col flex-auto whitespace-nowrap pt-6 gap-4 text-white text-sm">
        <div className="flex gap-1">
          <div className="text-white font-bold">{description}</div>
        </div>
      </article>
    );
  }

  return (
    <article className="whitespace-nowrap lg:w-full">
      <div className="pb-6 lg:px-0 space-y-2 lg:flex lg:justify-between lg:pb-2">
        <div className="text-white font-bold">{institution}</div>
        <div className="text-xs text-[#4F4F4F]">
          {date_start && date.format(new Date(date_start), "MMM YYYY")}
          {date_start !== null && date_end !== null && <> &ndash; </>}
          {date_end ? date.format(new Date(date_end), "MMM YYYY") : "Present"}
          <>
            {" "}
            &middot; <span className="font-bold">{occupation}</span>
          </>
        </div>
      </div>
      {description && (
        <div className="inline-flex items-center text-xs rounded-lg gap-1 py-1 px-3 select-none cursor-default text-secondary bg-[#ffadbd] dark:bg-[#34141a] text-foxfire">
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
  TOOL = "TOOL",
}

type TimelineAreaEntryArgs = {
  institution: string;
  date_start?: string;
  date_end?: string;
  description?: string;
  type: EntryType;
  occupation?: string;
};

export { Timeline };
