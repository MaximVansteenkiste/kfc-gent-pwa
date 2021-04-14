import { useQuery } from "react-query";

const calendarUrl =
  "https://datalake-prod2018.rbfa.be/graphql?operationName=GetTeamCalendar&variables=%7B%22teamId%22%3A%22184577%22%2C%22language%22%3A%22nl%22%2C%22sortByDate%22%3A%22asc%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22bf4be0c185dee11a27079e529a04d41dc692389ada678dac1f2280e056de7b7d%22%7D%7D";

const lastPlayedMatchUrl =
  "https://datalake-prod2018.rbfa.be/graphql?operationName=GetLastPlayedMatch&variables=%7B%22teamId%22%3A%22184577%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%223b7dc3ed88f5e40fbdb4fd8fab14dcb735bc4d9ade38c6525bd3b5717a1c5092%22%7D%7D";

const upcomingMatchUrl =
  "https://datalake-prod2018.rbfa.be/graphql?operationName=GetUpcomingMatch&variables=%7B%22teamId%22%3A%22184577%22%2C%22language%22%3A%22nl%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22f14c473111a1051bdc6d08827231c18d2446044cdcb1202b2ccb5f890113d74d%22%7D%7D";

export const useTeamCalendar = () => {
  const { isLoading, error, data } = useQuery("calendar", () =>
    fetch(calendarUrl).then((res) => res.json())
  );

  return { isLoading, error, teamCalendar: data?.data?.teamCalendar };
};

export const useLastPlayedMatch = () => {
  const { isLoading, error, data } = useQuery("lastPlayedMatch", () =>
    fetch(lastPlayedMatchUrl).then((res) => res.json())
  );

  return { isLoading, error, lastPlayedMatch: data?.data.lastPlayedMatch };
};

export const useUpcomingMatch = () => {
  const { isLoading, error, data } = useQuery("upcomingMatch", () =>
    fetch(upcomingMatchUrl).then((res) => res.json())
  );

  return { isLoading, error, upcomingMatch: data?.data.upcomingMatch };
};
