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
    src: "/images/MJ-GoAT-Graphic.jpg",
    width: 1600,
    height: 2400,
    title: "Tall Building",
    description: "A moody architectural shot.",
  },
  {
    id: "vid-1",
    type: "video",
    src: "/videos/NorthHighland_LA.mp4",
    poster: "https://placehold.co/800x500/png",
    title: "North Highland",
    description: "Short MP4 demo clip.",
  },
  {
    id: "img-2",
    type: "image",
    src: "/images/AI-Graphic.jpg",
    width: 1600,
    height: 1067,
    title: "Desert Dunes",
    description: "Sand textures and curves.",
  },
  {
    id: "img-3",
    type: "image",
    src: "/images/MOnstersoftheMidway-Graphic-FX.jpg",
    width: 1600,
    height: 1067,
    title: "City Night",
    description: "Neon reflections downtown.",
  },
  {
    id: "img-4",
    type: "image",
    src: "/images/SGA-Graphic.jpg",
    width: 1600,
    height: 900,
    title: "Forest Light",
    description: "Golden hour in the woods.",
  },
  {
    id: "img-5",
    type: "image",
    src: "/images/BearDown-Graphic.jpg",
    width: 1600,
    height: 1067,
    title: "Waterfall",
    description: "Mist and motion.",
  },
  {
    id: "img-6",
    type: "image",
    src: "/images/BullsTrophyGraphic.jpg",
    width: 1600,
    height: 1067,
    title: "Waterfall",
    description: "Mist and motion.",
  },
  {
    id: "img-7",
    type: "image",
    src: "/images/AbstractSpheres03_Red.png",
    width: 1600,
    height: 1067,
    title: "Waterfall",
    description: "Mist and motion.",
  },
  {
    id: "vid-2",
    type: "video",
    src: "/videos/AmericanMade_WhiteBlue_02.mp4",
    poster: "https://placehold.co/800x500/png",
    title: "American Made",
    description: "Short MP4 demo clip.",
  },
  {
    id: "vid-3",
    type: "video",
    src: "/videos/Patria-LA.mp4",
    poster: "https://placehold.co/800x500/png",
    title: "Patria",
    description: "Short MP4 demo clip.",
  },
];
