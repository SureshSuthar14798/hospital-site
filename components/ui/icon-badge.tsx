import {
  Ambulance,
  Bone,
  Brain,
  HeartPulse,
  ShieldPlus,
  Smile,
  Stethoscope
} from 'lucide-react';

const iconMap = {
  Ambulance,
  Bone,
  Brain,
  HeartPulse,
  ShieldPlus,
  Smile,
  Stethoscope
};

type IconBadgeProps = {
  name: keyof typeof iconMap;
  className?: string;
};

export function IconBadge({ name, className = '' }: IconBadgeProps) {
  const Icon = iconMap[name] ?? Stethoscope;

  return (
    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-brand-600 shadow-card ${className}`}>
      <Icon className='h-6 w-6' />
    </span>
  );
}
