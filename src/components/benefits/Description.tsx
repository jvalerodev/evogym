import ActionButton from '@/shared/ActionButton';
import Animation from '@/shared/Animation';
import HText from '@/shared/HText';

const descriptionVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const Description = () => {
  return (
    <div>
      <div className="relative">
        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
          <Animation variant={descriptionVariant}>
            <HText>
              Millions of happy members getting{' '}
              <span className="text-primary-500">fit</span>.
            </HText>
          </Animation>
        </div>
      </div>

      <Animation delay={0.2} variant={descriptionVariant}>
        <p className="my-5">
          Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
          ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
          vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat
          sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
          pretium sapien proin integer nisl. Felis orci diam odio.
        </p>

        <p className="mb-5">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </p>
      </Animation>

      <div className="relative mt-16">
        <div className="before:absolute before:-bottom-20 before:-right-28 before:z-[-1] before:content-sparkles">
          <ActionButton>Join Now</ActionButton>
        </div>
      </div>
    </div>
  );
};

export default Description;
