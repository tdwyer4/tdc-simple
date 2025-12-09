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
      "Sometimes you come across projects that are just plain ol’ fun. The LiveFire commercial shoot was exactly that. Approached with a very rough concept, I was asked to take full creative control from start to finish and make this whiteboard scratch session a reality. Starting with a storyboard and a scene-by-scene walkthrough, it was easy to get a clear vision of where we were headed. I brought in the incredibly talented team at Ghost Cat Creative to handle the filming and editing. Through a packed out shoot day we hit the indoor range and the beautiful LiveFire Studio. What came of this was not only a wildly cool video, but also a reminder for all of us that the work we get to do is a ton of fun.",
    thumbnail: "https://res.cloudinary.com/dbafrgioq/image/upload/v1765304744/TD_Web_Project-Thumbnails-LIVEFIRE_jxcmdc.webp",
    mainVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", // Placeholder video
    gallery: [
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307527/LF-Snapshot_01_idqu8h.webp",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307529/LF-Snapshot_02_yuojkr.webp",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307530/LF-Snapshot_03_vhyqbg.webp",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307531/LF-Snapshot_04_rjcqc9.webp",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307533/LF-Snapshot_05_t05uic.webp",
    ],
  },
  {
    id: "proj-2",
    title: "Forge Financial Logo Animation",
    description:
      "Forge Financial are some incredible people that make up this financial advisor group – AND they just marked 20 years of business! To celebrate, they did a full company rebrand to go along with their Celebration Gala. I partnered up with the extremely talented team at Wildpoint Creative to bring this beautiful new brand to life.Once they handed the Illustrator file over to me, I knew exactly what it needed. An elegant, flowing movement that introduced the icon, followed by a smooth transition into the brand text. This was a fun one to animate, and made it all worth the while when they revealed it at the Celebration Gala. Here’s to the next 20 years, Forge!",
    thumbnail:
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765304743/TD_Web_Project-Thumbnails-ForgeFinancial_cc7icb.webp",
    mainVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    gallery: [
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307522/Comp-2_a5jq5q.gif",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307524/Comp-3_tsxhie.gif",
    ],
  },
  {
    id: "proj-3",
    title: "God Behind Bars Newspaper",
    description:
      "Teamed up with Good & Faithful Studio to concept and design the 2022 Partner and Donor Year-End Newspaper for God Behind Bars. It was an honor to work on a project full of stories of impact, life change, and hope. God Behind Bars is an incredible organization and I am so thankful I was able to be a part of this. Elements created using Adobe Photoshop and Illustrator. Layout in Adobe InDesign. Handwriting for centerfold poster with Procreate.",
    thumbnail: "https://res.cloudinary.com/dbafrgioq/image/upload/v1765304743/TD_Web_Project-Thumbnails-GBB_ojlny5.webp",
    mainVideo:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    gallery: [
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307518/8E302114-86B7-42C9-97DC-761AE15DE9FF_oqkngo.webp",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307519/16F274BE-1B9E-4412-A2B4-112B96A8CF06_buqby2.webp",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307521/C56D2707-349D-49E9-ABCA-8820FDBD77CA_uprs20.webp",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307525/DC87E44B-3A5F-426B-8EF3-134AC3300321_qo6koy.webp",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307526/F1789E25-0D85-4CD3-872C-B730B3C997AC_ar3c7f.webp",
    ],
  },
  // ... add remaining items with similar structure
];
