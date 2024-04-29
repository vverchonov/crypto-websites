export const RegularText = (props: any) => {
  return (
    <p className={"text-2xl text-black " + props.customClass}>{props.text}</p>
  );
};
