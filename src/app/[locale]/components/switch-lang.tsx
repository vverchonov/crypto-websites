"use client";
import { useRouter } from "next/navigation";
import { RegularText } from "./common/text/regular-text";
import { useEffect, useState } from "react";

export const SwitchLang = () => {
  const router = useRouter();
  const [checked, isChecked] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    isChecked(path === "/zh-CN");
  }, []);

  const handleToggle = () => {
    const newPath = checked ? "/en" : "/zh-CN";
    router.push(newPath);
  };

  return (
    <label className="inline-flex gap-8 items-center me-5 cursor-pointer z-50">
      <RegularText customClass={"text-white"} text={"English"} />
      <input
        onChange={handleToggle}
        type="checkbox"
        checked={checked}
        className="sr-only peer"
      />
      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
      <RegularText customClass={"text-white"} text={"Chinese"} />
    </label>
  );
};
{
  /* <img
      onClick={() => {
        if (window.location.pathname === "/zh-CN") {
          router.push("/en");
        } else {
          router.push("/zh-CN");
        }
      }}
      classNameName="w-[50%] md:w-[15%]"
      src={"./section-1/change-lang.webp"}
    /> */
}
