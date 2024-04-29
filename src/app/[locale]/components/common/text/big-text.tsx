export const BigText = (props: any) => {
  return (
    <p className={"text-5xl text-black relative " + props.customClass}>
      {props.text}
      {props.extra}
    </p>
  );
};
