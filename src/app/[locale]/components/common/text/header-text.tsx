export const HeaderText = (props: any) => {
  return (
    <p className={"text-black text-5xl leading-snug " + props.customClass}>
      {props.text}
    </p>
  );
};
