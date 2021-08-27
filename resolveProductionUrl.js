const previewSecret = 'MY_SECRET'; // Copy the string you used for SANITY_PREVIEW_SECRET
// const projectUrl = 'http://localhost:3000';
// Vercel
// const projectUrl = 'https://cms-sanity-app-bay.vercel.app';
// Layer0
const projectUrl = 'https://adebiyi-adedotun-ne-cms-sanity-app-default.layer0.link';

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
