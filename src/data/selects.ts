// data/selects.ts

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  roleTags: string;
  thumbnail: string; // Used for the main grid
  mainVideo: string; // The featured video in the modal
  gallery: string[]; // Array of image URLs for the bottom of the modal
};

export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "LiveFire Commercial Shoot",
    description:
      "Sometimes you come across projects that are just plain ol’ fun. The LiveFire commercial shoot was exactly that. Approached with a very rough concept, I was asked to take full creative control from start to finish and make this whiteboard scratch session a reality. Starting with a storyboard and a scene-by-scene walkthrough, it was easy to get a clear vision of where we were headed. I brought in the incredibly talented team at Ghost Cat Creative to handle the filming and editing while I handled the creative direction, production, and design. Through a packed out shoot day we hit the indoor range and the beautiful LiveFire Studio. What came of this was not only a wildly cool video, but also a reminder for all of us that the work we get to do is a ton of fun.",
    roleTags: "Creative Director, Producer, Talent and Contract scout, Motion Graphics, Graphic Design",
      thumbnail: "https://res.cloudinary.com/dbafrgioq/image/upload/v1765304744/TD_Web_Project-Thumbnails-LIVEFIRE_jxcmdc.webp",
    mainVideo:
      "https://res.cloudinary.com/dbafrgioq/video/upload/v1765567573/LiveFire-WEB_jsvzvr.mp4",
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
      "Forge Financial are some incredible people that make up this financial advisor group – AND they just marked 20 years of business! To celebrate, they did a full company rebrand to go along with their Celebration Gala. I partnered up with the extremely talented team at Wildpoint Creative to bring this beautiful new brand to life. Once they handed the Illustrator file over to me, I knew exactly what it needed. An elegant, flowing movement that introduced the icon, followed by a smooth transition into the brand text. This was a fun one to animate, and made it all worth the while when they revealed it at the Celebration Gala. Here’s to the next 20 years, Forge!",
    roleTags: "Motion Graphics, Graphic Design",
      thumbnail:
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765304743/TD_Web_Project-Thumbnails-ForgeFinancial_cc7icb.webp",
    mainVideo:
      "https://res.cloudinary.com/dbafrgioq/video/upload/v1765569049/ForgeFinancial_cnitlf.mp4",
    gallery: [
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307522/Comp-2_a5jq5q.gif",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307524/Comp-3_tsxhie.gif",
    ],
  },
  {
    id: "proj-3",
    title: "Lake Norman Baptist Logo Animation",
    description:
      "Approached with this project by Josh Whiting (Brightcoal), we set out to perfectly encapsulate the spirit of Lake Norman Baptist Church. Josh created a killer brand for LNBC and I couldn’t wait to bring it into After Effects. The animation is a lively and dynamic showcase of vibrant design. With a playful and fluid motion, the elements come to life, creating a captivating dance of colors and shapes. The animation exudes a joyful energy, maintaining a smooth and seamless flow throughout. It's a delightful visual journey that perfectly complements the people and community of Lake Norman Baptist Church.",
    thumbnail: "https://res.cloudinary.com/dbafrgioq/image/upload/v1765304744/TD_Web_Project-Thumbnails-LNBC_eqykvr.webp",
    roleTags: "Motion Graphics, Graphic Design",
    mainVideo:
      "https://res.cloudinary.com/dbafrgioq/video/upload/v1765571745/LBNC_ce5fv5.mp4",
    gallery: [
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765571767/LBNC-icon-1_vqahxi.gif",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765571769/LBNC-icon-2_ywmdad.gif",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765307521/C56D2707-349D-49E9-ABCA-8820FDBD77CA_uprs20.webp",
    ],
  },
  {
    id: "proj-4",
    title: "Energy of North Dakota TV Spot",
    description:
      "When approached with the North Dakota project, the aim was to take on the entire post-production process. This involved a meticulous footage transcode to ensure peak quality, followed by a thorough selection of key clips. Through a couple rounds of full edit and revision phases, the narrative was carefully crafted. And this is where the fun began. Coloring was a crucial aspect, weaving together the overall aesthetic and mood of the sequence. While digging for the perfect music bed and screening voice over talent, I found a mixture of grit, soul, and a warm smile that perfectly describes the people of North Dakota. Capping it off with a simple logo animation, this TV Spot was ready to air and proudly represent the state of North Dakota.",
    thumbnail: "https://res.cloudinary.com/dbafrgioq/image/upload/v1765304743/TD_Web_Project-Thumbnails-EnergyOfND_op1oax.webp",
    roleTags: "Lead Video Editor, Motion Graphics, Graphic Design, Audio Pre-Mix, Color Correction, Delivery",
    mainVideo:
      "https://res.cloudinary.com/dbafrgioq/video/upload/v1765577571/north_dakota__60_tv_spot_1080p_aayalw.mp4",
    gallery: [
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765577195/EoND-1_qjlytq.webp",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765577196/EoND-2_kumrjk.webp",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765577198/EoND-3_yw48bl.webp",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765577200/EoND-4_akdbpg.webp",
      "https://res.cloudinary.com/dbafrgioq/image/upload/v1765577201/EoND-5_nompch.webp",
    ],
  },
];
