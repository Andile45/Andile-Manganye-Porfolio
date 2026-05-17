import type { Project } from '../data/projects';

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  label?: string;
};

export function getProjectGalleryImages(project: Project): ProjectGalleryImage[] {
  const images: ProjectGalleryImage[] = [
    {
      src: project.thumbnail,
      alt: project.thumbnailAlt,
      label:
        project.secondaryThumbnail && project.thumbnailVariant === 'mobile'
          ? 'Mobile'
          : undefined,
    },
  ];

  if (project.secondaryThumbnail) {
    images.push({
      src: project.secondaryThumbnail.src,
      alt: project.secondaryThumbnail.alt,
      label: 'CMS',
    });
  }

  return images;
}
