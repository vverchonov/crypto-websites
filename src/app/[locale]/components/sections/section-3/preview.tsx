export default function Preview(props: any) {
  return (
    <div className="flex flex-col items-center lg:flex-row my-16 gap-16 justify-center max-w-screen-2xl">
      <img
        className=" w-10/12 lg:w-2/12 rounded-lg transform transition duration-500 hover:scale-110 z-index-50 select-none"
        src={"/section-3/vr/ar1.webp"}
        alt="image1"
      />
      <img
        className=" w-10/12 lg:w-2/12 rounded-lg transform transition duration-500 hover:scale-110 z-index-50 select-none"
        src={"/section-3/vr/ar2.webp"}
        alt="image2"
      />
      <img
        className=" w-10/12 lg:w-2/12 rounded-lg transform transition duration-500 hover:scale-110 z-index-50 select-none"
        src={"/section-3/vr/ar3.webp"}
        alt="image3"
      />
      <img
        className=" w-10/12 lg:w-2/12 rounded-lg transform transition duration-500 hover:scale-110 z-index-50 select-none"
        src={"/section-3/vr/ar4.webp"}
        alt="image4"
      />
    </div>
  );
}
