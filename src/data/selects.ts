export type ProjectItem = {
  id: string;
  type: "image" | "video";
  src: string; // image src or video src
  thumb?: string; // for modal
  width?: number; // optional intrinsic width for images
  height?: number; // optional intrinsic height for images
  poster?: string; // for videos
  title: string;
  description: string;
};

// Demo content using remote images/videos (you can replace with /public paths)
export const projects: ProjectItem[] = [
 {
    id: "img-1",
    type: "image",
    src: "/images/selects-thumbs/TD_Web_Project-Thumbnails-LIVEFIRE.webp",
    width: 1600,
    height: 1600,
    title: "LiveFire Commercial Shoot",
    description: "",
  },
  {
    id: "img-2",
    type: "image",
    src: "/images/selects-thumbs/TD_Web_Project-Thumbnails-ForgeFinancial.webp",
    width: 1600,
    height: 1600,
    title: "Forge Financial Logo Animation",
    description: "",
  },
  {
    id: "img-3",
    type: "image",
    src: "/images/selects-thumbs/TD_Web_Project-Thumbnails-GBB.webp",
    width: 1600,
    height: 1600,
    title: "God Behind Bars Newspaper",
    description: "",
  },
  {
    id: "img-4",
    type: "image",
    src: "/images/selects-thumbs/TD_Web_Project-Thumbnails-LNBC.webp",
    width: 1600,
    height: 1600,
    title: "Lake Norman Logo Animation",
    description: "",
  },
  {
    id: "img-5",
    type: "image",
    src: "/images/selects-thumbs/TD_Web_Project-Thumbnails-TC.webp",
    width: 1600,
    height: 1600,
    title: "Transformation Church Series Bumper",
    description: "",
  },
  {
    id: "img-6",
    type: "image",
    src: "/images/selects-thumbs/TD_Web_Project-Thumbnails-EnergyOfND.webp",
    width: 1600,
    height: 1600,
    title: "Energy f North Dakota TV Spot",
    description: "",
  },
];