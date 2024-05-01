export const RegularText = (props: any) => {
  return (
    <p
      className={
        "text-xl text-black 2xl:text-4xl leading-snug select-none " +
        props.customClass
      }
    >
      {props.text}
    </p>
  );
};
