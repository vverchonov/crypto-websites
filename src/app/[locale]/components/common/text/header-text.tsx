export const HeaderText = (props: any) => {
  return (
    <p className={"text-black text-8xl leading-snug " + props.customClass}>
      {props.text}
    </p>
  );
};
