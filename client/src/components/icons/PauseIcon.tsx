const PauseIcon = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg viewBox="0 0 24 24" width="25" height="25" {...props}>
      <g>
        <path d="M4 2h5v20H4V2zm11 20h5V2h-5v20z"></path>
      </g>
    </svg>
  );
};

export default PauseIcon;
