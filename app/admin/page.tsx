import { CalendarRange, FileText, ShieldCheck, UserRound } from 'lucide-react';

import { PageHero } from '@/components/ui/page-hero';
import { blogPosts, doctors, pageHeroBackgrounds } from '@/lib/data';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Admin Panel',
  description: 'Basic admin panel structure for managing doctors, appointments, and blog content.',
  path: '/admin'
});

const cards = [
  { label: 'Doctors managed', value: doctors.length.toString(), icon: UserRound },
  { label: 'Pending appointments', value: '18', icon: CalendarRange },
  { label: 'Blog articles', value: blogPosts.length.toString(), icon: FileText },
  { label: 'System status', value: 'Healthy', icon: ShieldCheck }
];

export default function AdminPage() {
  return (
    <div className='page-shell section-space space-y-12'>
      <PageHero
        eyebrow='Admin'
        title='A basic operational dashboard ready for backend integration'
        description='This admin view is structured for doctor management, appointment oversight, and blog updates. It is a clean UI shell ready to connect with MongoDB, Firebase, or a custom API layer.'
        backgroundImage={pageHeroBackgrounds.admin}
      />

      <section className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.label} className='rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card'>
              <span className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600'>
                <Icon className='h-6 w-6' />
              </span>
              <p className='mt-5 text-3xl font-semibold text-ink'>{card.value}</p>
              <p className='mt-2 text-sm text-slate-600'>{card.label}</p>
            </article>
          );
        })}
      </section>

      <section className='grid gap-8 xl:grid-cols-[1.1fr,0.9fr]'>
        <div className='rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8'>
          <h2 className='text-2xl font-semibold text-ink'>Manage doctors</h2>
          <div className='mt-6 overflow-x-auto'>
            <table className='min-w-full text-left text-sm'>
              <thead>
                <tr className='border-b border-slate-100 text-slate-500'>
                  <th className='pb-3 font-medium'>Doctor</th>
                  <th className='pb-3 font-medium'>Specialization</th>
                  <th className='pb-3 font-medium'>Availability</th>
                </tr>
              </thead>
              <tbody>
                {doctors.slice(0, 4).map((doctor) => (
                  <tr key={doctor.slug} className='border-b border-slate-100'>
                    <td className='py-4 font-medium text-ink'>{doctor.name}</td>
                    <td className='py-4 text-slate-600'>{doctor.specialization}</td>
                    <td className='py-4 text-slate-600'>{doctor.availability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className='rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-8'>
          <h2 className='text-2xl font-semibold text-ink'>Manage content</h2>
          <div className='mt-6 space-y-4'>
            {blogPosts.map((post) => (
              <div key={post.slug} className='rounded-[1.5rem] border border-slate-100 bg-slate-50 p-4'>
                <p className='text-sm font-semibold text-ink'>{post.title}</p>
                <p className='mt-2 text-sm text-slate-600'>{post.category} - {post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
