import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import dog from '../../assets/dog.jpg';
import pens from '../../assets/pens.jpg';
import bottles from '../../assets/bottles.jpg';
import dogWebp from '../../assets/dog.webp';
import pensWebp from '../../assets/pens.webp';
import bottlesWebp from '../../assets/bottles.webp';

const carouselImages = [
  { jpg: dog, webp: dogWebp, alt: 'Dog with toys' },
  { jpg: pens, webp: pensWebp, alt: ' Pens on a desk' },
  {
    jpg: bottles,
    webp: bottlesWebp,
    alt: 'Water plastic bottles',
  },
];

function ServicesCarousel() {
  return (
    <Carousel
      className="rounded-3xl overflow-hidden "
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}>
      <CarouselContent>
        {carouselImages.map(({ jpg, webp, alt }, index) => (
          <CarouselItem key={index}>
            <picture>
              <source srcSet={webp.src} type="image/webp" />
              <source srcSet={jpg.src} type="image/jpeg" />
              <img
                src={jpg.src}
                alt={alt}
                className="w-full h-full max-h-[448px] object-cover rounded-3xl "
              />
            </picture>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default ServicesCarousel;
