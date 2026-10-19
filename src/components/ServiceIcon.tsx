import { Heart, Leaf, User } from "lucide-react";
import type { Service } from "@/lib/site";

const ICONS = {
  leaf: { Icon: Leaf, color: "text-teal-800 dark:text-teal-200" },
  heart: { Icon: Heart, color: "text-blue-800 dark:text-blue-200" },
  user: { Icon: User, color: "text-purple-800 dark:text-purple-200" },
};

const ServiceIcon = ({ icon, className = "size-8" }: { icon: Service["icon"]; className?: string }) => {
  const { Icon, color } = ICONS[icon];
  return <Icon aria-hidden className={`${className} ${color}`} />;
};

export default ServiceIcon;
