import Image from "next/image";
import { Container } from "../globals";

export const HomeBanner = () => {
  return (
    <Container
      className="
    py-[5rem]
    lg:py-[20rem]
    "
    >
      <div
        className="
        flex
        flex-col-reverse
        gap-[3rem]
        lg:flex-row
        lg:justify-center
        lg:gap-[15rem]
        "
      >
        <div>
          <h1>Front-End React Developer</h1>
          <p>
            Hi, I am Roy Cerdan. A passionate Front-end React Developer based in
            Lima, Perú.
          </p>
        </div>
        <figure
          className="w-full 
        lg:w-[35rem] 
        lg:h-[35rem]
        "
        >
          <Image
            className="w-full h-full"
            src="/img/bg.jpg"
            alt="hero"
            width={1920}
            height={1080}
          />
        </figure>
      </div>

      <div>
        <p>Tech Stack</p>
      </div>
    </Container>
  );
};
