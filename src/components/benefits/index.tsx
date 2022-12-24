import { motion } from 'framer-motion';
import useSelectedPage from '@/hooks/useSelectedPage';
import HText from '@/shared/HText';
import Animation from '@/shared/Animation';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import Benefit from './Benefit';
import Description from './Description';
import benefits from './data';
import { SelectedPage } from '@/types/typings';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const Benefits = () => {
  const { setSelectedPage } = useSelectedPage();

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <Animation styles="text-center md:my-5 md:mx-auto md:w-3/5">
          <HText>More than just a gym.</HText>

          <p className="my-5 text-start text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </Animation>

        {/* BENEFITS */}
        <Animation
          variant={container}
          styles="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map(({ Icon, title, description }) => (
            <Benefit
              key={title}
              Icon={Icon}
              title={title}
              description={description}
            />
          ))}
        </Animation>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            src={BenefitsPageGraphic}
            alt="Benefits page graphic"
            className="mx-auto"
          />

          <Description />
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
