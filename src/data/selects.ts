// data/selects.ts

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  thumbnail: string; // Used for the main grid
  mainVideo: string; // The featured video in the modal
  gallery: string[]; // Array of image URLs for the bottom of the modal
};

export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "LiveFire Commercial Shoot",
    description:
      "An intense look into the production of the LiveFire series. This project required precise timing and high-dynamic-range cinematography to capture the essence of the heat.",
    thumbnail: "/images/selects-thumbs/TD_Web_Project-Thumbnails-LIVEFIRE.webp",
    mainVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", // Placeholder video
    gallery: [
      "https://placehold.co/800x600/1a1a1a/FFF?text=Set+Photo+1",
      "https://placehold.co/800x600/1a1a1a/FFF?text=Set+Photo+2",
      "https://placehold.co/800x600/1a1a1a/FFF?text=Set+Photo+3",
    ],
  },
  {
    id: "proj-2",
    title: "Forge Financial Logo Animation",
    description:
      "A sleek, motion-graphic heavy approach to modern finance branding. We utilized kinetic typography and smooth easing to represent trust and speed.",
    thumbnail:
      "/images/selects-thumbs/TD_Web_Project-Thumbnails-ForgeFinancial.webp",
    mainVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    gallery: [
      "https://placehold.co/800x600/1a1a1a/FFF?text=Styleframe+A",
      "https://placehold.co/800x600/1a1a1a/FFF?text=Styleframe+B",
    ],
  },
  {
    id: "proj-3",
    title: "God Behind Bars Newspaper",
    description:
      "A print and digital hybrid campaign designed to reach audiences in unconventional spaces.",
    thumbnail: "/images/selects-thumbs/TD_Web_Project-Thumbnails-GBB.webp",
    mainVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    gallery: [
      "https://placehold.co/600x800/1a1a1a/FFF?text=Print+Layout",
      "https://placehold.co/800x600/1a1a1a/FFF?text=Digital+Asset",
      "https://placehold.co/800x600/1a1a1a/FFF?text=BTS",
      "https://placehold.co/800x600/1a1a1a/FFF?text=Editorial",
    ],
  },
  // ... add remaining items with similar structure
];
