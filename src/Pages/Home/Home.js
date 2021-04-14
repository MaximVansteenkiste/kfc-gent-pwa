import Card from "../../Components/Card";
import MatchCard from "../../Components/MatchCard";
import { useLastPlayedMatch, useUpcomingMatch } from "../../Hooks/Api/api";

const Home = () => {
  const { isLoading: upcomingMatchLoading, upcomingMatch } = useUpcomingMatch();
  const {
    isLoading: lastPlayedMatchLoading,
    lastPlayedMatch,
  } = useLastPlayedMatch();

  if (upcomingMatchLoading || lastPlayedMatchLoading) {
    return <div>laden...</div>;
  }

  return (
    <>
      <MatchCard match={lastPlayedMatch} />
      <MatchCard match={upcomingMatch} />
    </>
  );
};

export default Home;
