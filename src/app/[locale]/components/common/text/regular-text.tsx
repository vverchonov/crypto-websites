export const RegularText = (props: any) => {
  return (
    <p className={"text-xl text-black " + props.customClass}>{props.text}</p>
  );
};
