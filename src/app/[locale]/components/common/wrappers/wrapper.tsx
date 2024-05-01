export const Wrapper = (props: any) => {
  return (
    <div className="px-4 w-full lg:w-10/12 md:px-18 lg:px-24 pt-8 pb-8">
      {props.children}
    </div>
  );
};
