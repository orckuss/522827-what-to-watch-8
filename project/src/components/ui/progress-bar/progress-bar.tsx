type Props = {
  persent: number;
};

function ProgressBar({ persent }: Props): JSX.Element {
  return (
    <div className="player__time">
      <progress
        className="player__progress"
        value={persent}
        max="100"
      />

      <div
        className="player__toggler"
        style={{ 'left': `${persent}%` }}
      >
        Toggler
      </div>
    </div>
  );
}

export default ProgressBar;
