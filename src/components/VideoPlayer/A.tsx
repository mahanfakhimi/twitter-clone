import { memo } from "react";

const A = () => {
  return (
    <div>
      {[...Array(2500)].map((item) => (
        <div>div</div>
      ))}
    </div>
  );
};

export default memo(A);
