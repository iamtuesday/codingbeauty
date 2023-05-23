import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "w-full mx-auto px-10",
        "md:px-20",
        "lg:px-30 lg:w-[75%] lg:max-w-[140rem]",
        className
      )}
    >
      {children}
    </section>
  );
};

