export default function Preview(props: any) {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-16 justify-center max-w-screen-2xl">
      <img
        className=" w-10/12 lg:w-2/12 select-none rounded-lg transform transition duration-500 hover:scale-110 z-index-50 select-none"
        src={"/section-3/vr/VR1.png"}
        alt="image1"
      />
      <img
        className=" w-10/12 lg:w-2/12 select-none rounded-lg transform transition duration-500 hover:scale-110 z-index-50 select-none"
        src={"/section-3/vr/VR2.png"}
        alt="image2"
      />
      <img
        className=" w-10/12 lg:w-2/12 select-none rounded-lg transform transition duration-500 hover:scale-110 z-index-50 select-none"
        src={"/section-3/vr/VR3.png"}
        alt="image3"
      />
      <img
        className=" w-10/12 lg:w-2/12 select-none rounded-lg transform transition duration-500 hover:scale-110 z-index-50 select-none"
        src={"/section-3/vr/VR4.png"}
        alt="image4"
      />
    </div>
  );
}
