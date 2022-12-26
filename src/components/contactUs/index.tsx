import { motion } from 'framer-motion';
import useSelectedPage from '@/hooks/useSelectedPage';
import Animation from '@/shared/Animation';
import { SelectedPage } from '@/types/typings';
import Form from './Form';
import ContactImage from './ContactImage';
import HText from '@/shared/HText';

const variant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const ContactUs = () => {
  const { setSelectedPage } = useSelectedPage();

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <Animation styles="md:w-3/5">
          <HText>
            <span className="uppercase text-primary-500">Join Now</span> to get
            in shape
          </HText>

          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </Animation>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <Form variant={variant} />

          <ContactImage variant={variant} />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
