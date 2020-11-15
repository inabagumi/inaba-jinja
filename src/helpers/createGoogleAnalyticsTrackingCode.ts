function createGoogleAnalyticsTrackingCode(trackingID: string): string {
  const trackingCode = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${trackingID}');`

  return trackingCode
}

export default createGoogleAnalyticsTrackingCode
