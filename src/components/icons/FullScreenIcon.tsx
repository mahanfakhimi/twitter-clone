const FullScreenIcon = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg viewBox="0 0 24 24" {...props} width="25" height="25">
      <g>
        <path d="M13 3h8v8h-2V6.41l-5.043 5.05-1.414-1.42L17.586 5H13V3zm-1.543 10.96L6.414 19H11v2H3v-8h2v4.59l5.043-5.05 1.414 1.42z"></path>
      </g>
    </svg>
  );
};

export default FullScreenIcon;
