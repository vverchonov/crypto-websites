export const BigText = (props: any) => {
  return (
    <div className={"relative " + props.customWrapper}>
      <p
        className={
          "text-3xl text-black relative leading-snug " + props.customClass
        }
      >
        {props.text}
      </p>
      {props.extra}
    </div>
  );
};
