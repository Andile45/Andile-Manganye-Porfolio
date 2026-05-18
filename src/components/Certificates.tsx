import { Award, Download, ExternalLink } from './icons';
import { primaryButtonSm } from '../lib/button-styles';
import { cn } from '../lib/utils';

const certificates = [
  {
    title: 'Database Design',
    issuer: 'DataCamp',
    file: '/Cetificates/Data_Camp_Database Design.pdf',
    category: 'Database',
  },
  {
    title: 'Understanding Artificial Intelligence',
    issuer: 'DataCamp',
    file: '/Cetificates/datacanmp_Understanding Artificial Intelligence.pdf',
    category: 'AI/ML',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    file: '/Cetificates/freeCodeCamp_Legacy JavaScript Algorithms and Data Structures.pdf',
    category: 'Programming',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    file: '/Cetificates/freeCodeCamp_Legacy Responsive Web Design V8.pdf',
    category: 'Web Development',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding overflow-x-hidden">
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-700">
            Credentials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Certificates
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certificates.map((cert) => (
            <article
              key={cert.title}
              className={cn(
                'group flex w-full min-w-0 flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-5 backdrop-blur-md sm:p-6',
                'transition-colors hover:border-zinc-400'
              )}
            >
              <div className="mb-4 flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                  <Award className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-semibold text-zinc-950">{cert.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{cert.issuer}</p>
                  <span className="mt-2 inline-block rounded-full border border-zinc-200 px-3 py-0.5 text-xs font-medium text-zinc-600">
                    {cert.category}
                  </span>
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:gap-3">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-300 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 sm:flex-1"
                >
                  <ExternalLink className="h-4 w-4 shrink-0" />
                  View
                </a>
                <a
                  href={cert.file}
                  download
                  className={cn('w-full justify-center sm:flex-1', primaryButtonSm)}
                >
                  <Download className="h-4 w-4 shrink-0" />
                  Download
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
