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
                Inspired by an IKEA toy, $ALON was created as a meme coin
                capable of not only hit the moon but also venturing to the edge
                of the universe. If the community falls in love with Alon, we
                will launch a series and NFTs about it. Made wif love by Letto
                Dev Team.
                `;
        case "2":
          return `
             "This meme isn't used that much wah wah it's not a real
                    meme". The real meme is you not buying generational
                    wealth token before its too late.
          `;
        case "3":
          return `
            We are developing 3D and 2D visualizations for $ALON to make it
            easier for the community to create content and support our humanoid
            :3
          `;
        case "4":
          return `In the vast cosmic sea, where the silent stars play, Alon sails alone, night blending into day. His ship, stitched from dreams, glides through starlit streams, A wanderer roaming where the galaxy gleams.`;
        case "5":
          return `Through celestial tales and planetary trails,He seeks kinship where earthly logic fails.Yet amidst galaxies wide and nebulas bright,He finds solace in the endless starry night.
`;
        case "6":
          return `Alon, the alien, in his quest to belong,Finds peace in the universe's grand song.Though alone he may seem in the vast, infinite dome,In the cosmos’s embrace, he's eternally home.`;
      }
    }
    if (val === Langs.CHINESE) {
      switch (key) {
        case "1":
          return `
            受到了一款宜家玩具启发，$ALON 被创造为一种能够不仅能触及月球，还能冒险到宇宙边缘的meme币。如果社区的大家爱上了 ALON，我们将推出一系列关于它的 NFTs。由 LETTO 开发团队用爱制作。 
          `;
        case "2":
          return "“这个meme并没有被广泛使用，哇哇，它不是真正的meme” 真正的meme是你在为时已晚之前没有购买新时代的财富代币.";
        case "3":
          return "我们正在为 $ALON 开发 3D 和 2D 可视化，以便社区更轻松地创作内容并支持我们的人物形象 :3";
        case "4":
          return "在浩瀚的宇宙之海中，寂静的星星轻轻漂浮，阿隆独自航行，夜色与白昼交替。他的船，由梦想编织而成，穿行于星光闪烁的溪流中，一个流浪者游荡在星河闪烁的地方。 ";
        case "5":
          return "透过宇宙的传说和行星的轨迹，他寻找着归属，超越了地球上的逻辑。然而，在广阔的星系和明亮的星云之间，他在无尽的星空中找到了慰藉。 ";
        case "6":
          return "Alon，这个外星人，在他寻找归属之旅中，找到了宇宙的宏伟之歌中的平静。虽然在无尽的宇宙之穹顶下他似乎孤身一人，但在宇宙的怀抱中，他永远的家。 ";
      }
    }
  };

  return { word };
};
