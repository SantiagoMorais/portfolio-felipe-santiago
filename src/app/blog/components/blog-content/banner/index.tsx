import "swiper/css";

import { BannerCarousel } from "./bannerCarousel";
import { BannerDescription } from "./bannerDescription";

export const Banner = () => (
  <div className="relative flex size-full overflow-hidden rounded-lg bg-black">
    <BannerCarousel />
    <BannerDescription />
  </div>
);
