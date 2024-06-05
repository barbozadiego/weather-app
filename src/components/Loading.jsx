import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
      <RotatingLines
        height={96}
        width={96}
        color="#00b4d8"
        strokeWidth="3"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};
export default Loading;
