import Card from "./Card";

const twoDigits = (number) => (number < 10 ? `0${number}` : number);
const dateDisplay = (date) => `${date.get}`;

const MatchCard = ({ match: { startDate, homeTeam, awayTeam, outcome } }) => {
  return (
    <Card>
      <div className="grid grid-cols-3 justify-items-center items-center">
        <div className="w-full truncate text-center">{homeTeam.name}</div>
        <Outcome startDate={startDate} outcome={outcome} />
        <div className="w-full truncate text-center">{awayTeam.name}</div>
      </div>
    </Card>
  );
};

const Outcome = ({
  startDate,
  outcome: { homeTeamGoals, awayTeamGoals, subscript },
}) => {
  const date = new Date(startDate);

  if (homeTeamGoals === null && !subscript) {
    return (
      <div className="flex flex-col justify-center content-center">
        <div className="opacity-70 text-xs font-thin">{`${twoDigits(
          date.getHours()
        )}:${twoDigits(date.getMinutes())}`}</div>
        <div className="opacity-70 text-xs">{`${twoDigits(
          date.getDate()
        )}/${twoDigits(date.getMonth() + 1)}`}</div>
      </div>
    );
  }

  if (subscript) {
    return <div className="opacity-70 text-xs lowercase font-thin">{subscript}</div>;
  }

  return (
    <div className="text-xl font-bold">
      {homeTeamGoals} - {awayTeamGoals}
    </div>
  );
};

export default MatchCard;

// `${twoDigits(date.getHours())}:${twoDigits(date.getMinutes())}`
