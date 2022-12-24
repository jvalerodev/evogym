import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import useSelectedPage from '@/hooks/useSelectedPage';
import ActionButton from '@/shared/ActionButton';
import Animation from '@/shared/Animation';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import { SelectedPage } from '@/types/typings';

const Home = () => {
  const { setSelectedPage } = useSelectedPage();

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND NAME HEADER */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <Animation styles="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="Home page text" />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of... Get Your Dream
              Body Now.
            </p>
          </Animation>

          {/* ACTIONS */}
          <Animation delay={0.2} styles="mt-8 flex items-center gap-8">
            <ActionButton>Join Now</ActionButton>

            <AnchorLink
              href={`#${SelectedPage.ContactUs}`}
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            >
              <p>Learn More</p>
            </AnchorLink>
          </Animation>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="Home page graphic" />
        </div>
      </motion.div>

      {/* SPONSORS */}
      <div className="hidden h-[150px] w-full bg-primary-100 py-10 md:block">
        <div className="mx-auto w-5/6">
          <div className="mx-auto flex w-3/5 items-center justify-between gap-8">
            <img src={SponsorRedBull} alt="RedBull sponsor" />

            <img src={SponsorForbes} alt="Forbes sponsor" />

            <img src={SponsorFortune} alt="Fortune sponsor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
