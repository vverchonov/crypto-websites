"use client";
export const Button = (props: any) => {
  return (
    <div
      className={
        "w-full flex justify-center z-40" +
        "hover:scale-105 transition-transform ease-in-out duration-150"
      }
    >
      <button
        className={
          "flex justify-center " + "btn-orange" + " cursor-pointer  z-50"
        }
        onClick={props.play}
      >
        <p onClick={props.play} className="text-4xl p-16 pt-6  select-none">
          {props.txt}
        </p>
      </button>
    </div>
  );
};
