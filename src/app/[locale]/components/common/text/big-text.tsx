export const BigText = (props: any) => {
  return (
    <div className="relative">
      <p
        className={
          "text-5xl text-black relative leading-snug " + props.customClass
        }
      >
        {props.text}
      </p>
      {props.extra}
    </div>
  );
};
