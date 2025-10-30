// ... right after your AppIcon component definition ...

interface InfoPointProps {
  ballClassName: string;
  textClassName: string;
  circleCx: string | number;
  circleCy: string | number;
  foreignObjectX: string | number;
  foreignObjectY: string | number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  children: React.ReactNode;
}

const InfoPoint: React.FC<InfoPointProps> = ({
  ballClassName,
  textClassName,
  circleCx,
  circleCy,
  foreignObjectX,
  foreignObjectY,
  imageSrc,
  imageAlt,
  title,
  children,
}) => (
  <>
    <foreignObject
      className={textClassName}
      x={foreignObjectX}
      y={foreignObjectY}
      width="400"
      height="250"
    >
      <div className="flex items-center gap-3 justify-center bg-white max-w-[13vw] h-[20vh] bg-black/50 p-2 rounded-xl">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-cover aspect-square rounded-full w-14 h-14"
        />
        <div className="w-full space-y-1  text-center">
          <p className="font-semibold text-left text-[8px]">{title}</p>
          <p className="text-justify text-[6px]">{children}</p>
        </div>
      </div>
    </foreignObject>
    <circle
      className={ballClassName}
      r="7"
      cx={circleCx}
      cy={circleCy}
    ></circle>
  </>
);

export default InfoPoint;
