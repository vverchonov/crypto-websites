export const BigText = (props: any) => {
  return (
    <p className={"text-5xl text-black " + props.customClass}>{props.text}</p>
  );
};
