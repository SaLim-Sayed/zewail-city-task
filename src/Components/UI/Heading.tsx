import { cn } from "../../libs/cn";
type HeadingProps={
  title:string
  subTitle?:string
}
export default function Heading({ title, subTitle }: HeadingProps) {
  return (
    <div className="w-[94%] lg:w-[90%] 2xl:w-[80%] mx-auto">
      <div
        className={cn(
          "flex text-center  w-full mt-[60px] mb-[24px] leading-[35px] flex-col  justify-center items-center"
        )}
      >
        {title && (
          <div className={cn("md:text-[64px] text-[40px] font-[800] text-cyan-800 ")}>
            {title}
          </div>
        )}
        {subTitle && (
          <div
            className={cn(
              "text-darkColor-20 font-[400] lg:text-[1.2rem] text-[1rem] max-w-md"
            )}
          >
            {subTitle}
          </div>
        )}
      </div>
    </div>
  );
}
