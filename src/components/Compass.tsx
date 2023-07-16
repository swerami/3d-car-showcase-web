const Compass = () => {
  return (
    <svg
      //   width="100"
      //   height="100"
      viewBox="-50 -50 250 250"
      xmlns="http://www.w3.org/2000/svg"
      className="compass"
    >
      {/* Square */}
      <rect
        x="20"
        y="20"
        width="90"
        height="90"
        fill="rgba(128, 128, 128, 0.2)"
        stroke="white"
        strokeWidth="2"
      />

      {/* North-South line */}
      <line x1="65" y1="120" x2="65" y2="10" stroke="white" strokeWidth="1" />

      {/* West-East line */}
      <line x1="120" y1="65" x2="10" y2="65" stroke="white" strokeWidth="1" />

      {/* Labels */}
      <text
        x="65"
        y="-5"
        textAnchor="middle"
        fill="white"
        fontWeight={700}
        fontSize={10}
        alignmentBaseline="central"
      >
        OFF-ROAD
      </text>
      <text
        x="65"
        y="135"
        textAnchor="middle"
        fill="white"
        fontWeight={700}
        fontSize={10}
        alignmentBaseline="central"
      >
        ROAD
      </text>
      <text
        x="145"
        y="65"
        textAnchor="middle"
        fill="white"
        fontWeight={700}
        fontSize={10}
        alignmentBaseline="central"
      >
        DRIFT
      </text>
      <text
        x="-12"
        y="65"
        textAnchor="middle"
        fill="white"
        fontWeight={700}
        fontSize={10}
        alignmentBaseline="central"
      >
        RACE
      </text>
    </svg>
  );
};

export default Compass;
