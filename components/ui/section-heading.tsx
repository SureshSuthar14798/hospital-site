type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left'
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-600 sm:text-sm'>
          {eyebrow}
        </p>
      ) : null}
      <h2 className='text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl'>
        {title}
      </h2>
      {description ? (
        <p className='mt-4 text-sm leading-5 text-slate-600 sm:text-base lg:text-lg'>
          {description}
        </p>
      ) : null}
    </div>
  );
}