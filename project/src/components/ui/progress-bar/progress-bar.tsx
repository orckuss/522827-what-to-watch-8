function ProgressBar(): JSX.Element {
  return (
    <div className="player__time">
      <progress
        className="player__progress"
        value="30"
        max="100"
      />

      <div
        className="player__toggler"
        style={{ 'left': '30%' }}
      >
        Toggler
      </div>
    </div>
  );
}

export default ProgressBar;
