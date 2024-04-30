export const RegularText = (props: any) => {
  return (
    <p
      className={
        "text-2xl text-black 2xl:text-4xl leading-snug " + props.customClass
      }
    >
      {props.text}
    </p>
  );
};
