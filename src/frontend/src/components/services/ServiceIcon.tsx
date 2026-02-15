import { Search, Target, FileText, Megaphone, Palette, PenTool, Image, Monitor } from 'lucide-react';

interface ServiceIconProps {
  icon: string;
  className?: string;
}

const iconMap = {
  search: Search,
  target: Target,
  'file-text': FileText,
  megaphone: Megaphone,
  palette: Palette,
  'pen-tool': PenTool,
  image: Image,
  monitor: Monitor,
};

export default function ServiceIcon({ icon, className = '' }: ServiceIconProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Search;
  
  return <IconComponent className={className} />;
}
