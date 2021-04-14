import Skeleton from "@material-ui/lab/Skeleton";
import Card from "../../Components/Card";
import MatchCard from "../../Components/MatchCard";
import { useTeamCalendar } from "../../Hooks/Api/api";

const Kalender = () => {
  const [isLoading, error, teamCalendar] = useTeamCalendar();
  
  if (isLoading) {
    return (
      <>
        <Skeleton variant="rect" width="100%" height={100} />
        <Skeleton variant="rect" width="100%" height={100} />
        <Skeleton variant="rect" width="100%" height={100} />
        <Skeleton variant="rect" width="100%" height={100} />
        <Skeleton variant="rect" width="100%" height={100} />
        <Skeleton variant="rect" width="100%" height={100} />
        <Skeleton variant="rect" width="100%" height={100} />
        <Skeleton variant="rect" width="100%" height={100} />
        <Skeleton variant="rect" width="100%" height={100} />
      </>
    );
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return teamCalendar?.map((m) => <MatchCard match={m} />);
};

export default Kalender;
