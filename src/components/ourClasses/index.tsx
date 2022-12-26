import { motion } from 'framer-motion';
import useSelectedPage from '@/hooks/useSelectedPage';
import Animation from '@/shared/Animation';
import HText from '@/shared/HText';
import Class from './Class';
import classes from './data';
import { SelectedPage } from '@/types/typings';

const OurClasses = () => {
  const { setSelectedPage } = useSelectedPage();

  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <Animation styles="mx-auto w-5/6">
          <div className="md:w-3/5">
            <HText>Our Classes</HText>

            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </Animation>

        <div className="mx-auto mt-10 h-[353px] w-11/12 overflow-x-auto overflow-y-hidden">
          <ul className="h-full w-[2800px] whitespace-nowrap">
            {classes.map(({ name, description, image }, index) => (
              <Class
                key={`${name}-${index}`}
                name={name}
                description={description}
                image={image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
