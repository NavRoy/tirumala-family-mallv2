import HeroSlider       from '@/components/HeroSlider'
import ShopByCategory   from '@/components/ShopByCategory'
import OfferBanner      from '@/components/OfferBanner'
import FeaturedProducts from '@/components/FeaturedProducts'
import InstaLive        from '@/components/InstaLive'
import InstagramReels   from '@/components/InstagramReels'
import DiscoverStore    from '@/components/DiscoverStore'
import Salebanner    from '@/components/Salebanner'
import Curatedstyle    from '@/components/Curatedstyle'
import { ScrollingDivider } from '@/components/ScrollingDivider'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      
      <ShopByCategory />
      
      <OfferBanner />
     
      <FeaturedProducts />
     
        <Salebanner />
      <InstaLive />
     
      <Curatedstyle />
      
      <InstagramReels />
      
     
    </>
  )
}
