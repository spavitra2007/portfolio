export function getDriveDirectLink(url: string | undefined): string | undefined {
  if (!url) return url;
  if (!url.includes('drive.google.com')) return url;
  
  // Transform to direct link for <img> tags
  return url
    .replace('/file/d/', '/uc?export=view&id=')
    .replace('/view?usp=sharing', '')
    .replace('/view', '');
}

export function getDriveEmbedLink(url: string | undefined): string | undefined {
  if (!url) return url;
  if (!url.includes('drive.google.com')) return url;
  
  // Transform to preview link for <iframe> tags
  return url.replace(/\/view.*$/, '/preview');
}
