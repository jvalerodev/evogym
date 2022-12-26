import Animation from '@/shared/Animation';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';

type Props = {
  variant: {};
};

const ContactImage = ({ variant }: Props) => {
  return (
    <Animation
      delay={0.2}
      variant={variant}
      styles="relative mt-16 basis-2/5 md:mt-0"
    >
      <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
        <img
          src={ContactUsPageGraphic}
          alt="Contact us page graphic"
          className="w-full"
        />
      </div>
    </Animation>
  );
};

export default ContactImage;
