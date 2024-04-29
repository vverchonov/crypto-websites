export const HeaderText = (props: any) => {
  return (
    <p className={"text-black text-8xl " + props.customClass}>{props.text}</p>
  );
};
