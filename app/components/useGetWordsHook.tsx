export enum Langs {
  ENG,
  CHINESE,
}

export const useGetWordsHook = () => {
  const word = (key: string, val: Langs) => {
    if (val === Langs.ENG) {
      switch (key) {
        case "1":
          return `
                Inspired by an IKEA toy, $LOLIEN was created as a meme coin
                capable of not only hit the moon but also venturing to the edge
                of the universe. If the community falls in love with Lolien, we
                will launch a series and NFTs about it.
                `;
        case "2":
          return `
             "This meme isn't used that much wah wah it's not a real
                    meme". The real meme is you not buying generational
                    wealth token before its too late.
          `;
        case "3":
          return `
            We are developing 3D and 2D visualizations for $LOLIEN to make it
            easier for the community to create content and support our humanoid
            :3
          `;
        case "4":
          return `Project was purchased`;
        case "5":
          return `Through celestial tales and planetary trails,He seeks kinship where earthly logic fails.Yet amidst galaxies wide and nebulas bright,He finds solace in the endless starry night.
`;
        case "6":
          return `Lolien, the alien, in his quest to belong,Finds peace in the universe's grand song.Though alone he may seem in the vast, infinite dome,In the cosmos’s embrace, he's eternally home.`;
        case "7":
          return "HOW TO BUY";
      }
    }
    if (val === Langs.CHINESE) {
      switch (key) {
        case "1":
          return `
            受到了一款宜家玩具启发，$LOLIEN 被创造为一种能够不仅能触及月球，还能冒险到宇宙边缘的meme币。如果社区的大家爱上了 LOLIEN，我们将推出一系列关于它的 NFTs。 
          `;
        case "2":
          return "“这个meme并没有被广泛使用，哇哇，它不是真正的meme” 真正的meme是你在为时已晚之前没有购买新时代的财富代币.";
        case "3":
          return "我们正在为 $LOLIEN 开发 3D 和 2D 可视化，以便社区更轻松地创作内容并支持我们的人物形象 :3";
        case "4":
          return "项目被购买";
        case "5":
          return "透过宇宙的传说和行星的轨迹，他寻找着归属，超越了地球上的逻辑。然而，在广阔的星系和明亮的星云之间，他在无尽的星空中找到了慰藉。 ";
        case "6":
          return "Lolien，这个外星人，在他寻找归属之旅中，找到了宇宙的宏伟之歌中的平静。虽然在无尽的宇宙之穹顶下他似乎孤身一人，但在宇宙的怀抱中，他永远的家。 ";
        case "7":
          return "如何购买";
      }
    }
  };

  return { word };
};
