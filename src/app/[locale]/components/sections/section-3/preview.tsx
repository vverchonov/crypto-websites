export default function Preview(props: any) {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-16 justify-center">
      <img
        className="w-full md:w-2/3 lg:w-1/3 select-none rounded-lg "
        src={"/section-3/example.png"}
        alt="image1"
      />
      <img
        className="w-full md:w-2/3 lg:w-1/3 select-none rounded-lg "
        src={"/section-3/example.png"}
        alt="image2"
      />
      <img
        className="w-full md:w-2/3 lg:w-1/3 select-none rounded-lg "
        src={"/section-3/example.png"}
        alt="image3"
      />
      <img
        className="w-full md:w-2/3 lg:w-1/3 select-none rounded-lg "
        src={"/section-3/example.png"}
        alt="image4"
      />
    </div>
  );
}
