import {
  Users,
  UtensilsCrossed,
  Trophy,
  Plane,
  Anchor,
  HeartHandshake,
  Lock,
  CalendarCheck,
  Map,
  Network,
  Briefcase,
  Cake,
  Smartphone,
  Tag,
  Dumbbell,
  Heart,
  Infinity,
  type LucideIcon,
} from "lucide-react";

/** Maps content-layer icon names to lucide components. */
const icons: Record<string, LucideIcon> = {
  Users,
  UtensilsCrossed,
  Trophy,
  Plane,
  Anchor,
  HeartHandshake,
  Lock,
  CalendarCheck,
  Map,
  Network,
  Briefcase,
  Cake,
  Smartphone,
  Tag,
  Dumbbell,
  Heart,
  Infinity,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = icons[name] ?? HeartHandshake;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
