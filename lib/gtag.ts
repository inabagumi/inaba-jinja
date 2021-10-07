export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

export function pageview(url: string): void {
  if ('gtag' in window || !GA_TRACKING_ID) return

  gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}
