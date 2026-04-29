import { Handshake, Users, Camera } from "lucide-react";

interface TimelineItemProps {
  time: string;
  title: string;
  icon: React.ElementType;
}

const TimelineItem = ({ time, title, icon: Icon }: TimelineItemProps) => (
  <div className="flex items-center gap-6 group">
    <div className="flex items-center gap-4 w-40 flex-shrink-0 justify-end">
      <p className="font-serif text-lg font-medium text-olive-dark group-hover:text-olive transition-colors">
        {time}
      </p>
      <div className="w-14 h-14 rounded-full bg-olive-light text-olive flex items-center justify-center border-2 border-olive/10 group-hover:bg-olive group-hover:text-crema transition-colors duration-300">
        <Icon className="w-6 h-6" />
      </div>
    </div>
    <div className="flex-1 flex items-center">
      <h4 className="font-serif text-base font-medium tracking-wide text-olive group-hover:font-semibold transition-all">
        {title}
      </h4>
      <div className="flex-1 border-t-2 border-dashed border-olive/20 ml-6" />
    </div>
  </div>
);

const Timeline = () => {
  return (
    <div className="space-y-12 flex flex-col items-center">
      <div className="text-center">
        <h2 className="font-script text-5xl text-olive pb-4">
          Rangkaian Acara
        </h2>
        <div className="w-24 h-0.5 bg-olive/20 mx-auto" />
      </div>

      <div className="relative w-full max-w-lg space-y-10 pl-16">
        <div className="absolute left-[110px] top-6 bottom-6 w-px border-l-2 border-dashed border-olive/20 z-0" />

        <TimelineItem time="09:00 WIB" title="AKAD NIKAH" icon={Handshake} />
        <TimelineItem
          time="10:00 WIB"
          title="RESEPSI & RAMAH TAMAH"
          icon={Users}
        />
        <TimelineItem time="13:00 WIB" title="FOTO BERSAMA" icon={Camera} />
      </div>
    </div>
  );
};

export default Timeline;
