export default function Preview(props: any) {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-16 justify-center">
      <img
        className="w-full md:w-2/3 lg:w-2/12 select-none rounded-lg "
        src={"/section-3/vr/VR1.png"}
        alt="image1"
      />
      <img
        className="w-full md:w-2/3 lg:w-2/12 select-none rounded-lg "
        src={"/section-3/vr/VR2.png"}
        alt="image2"
      />
      <img
        className="w-full md:w-2/3 lg:w-2/12 select-none rounded-lg "
        src={"/section-3/vr/VR3.png"}
        alt="image3"
      />
      <img
        className="w-full md:w-2/3 lg:w-2/12 select-none rounded-lg "
        src={"/section-3/vr/VR4.png"}
        alt="image4"
      />
    </div>
  );
}
