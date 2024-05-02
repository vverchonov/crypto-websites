import { Game } from "./game";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Game");
  return (
    <>
      <Game t1={t("1")} t2={t("2")} />
    </>
  );
};

export default Page;
