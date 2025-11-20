import { GOOGLE_ADSENSE_ID, AD_CONFIG } from '@shared/const';

interface AdBannerProps {
  placement: 'header' | 'middle' | 'footer' | 'sidebar' | 'inArticle';
}

export default function AdBanner({ placement }: AdBannerProps) {
  if (!AD_CONFIG.enabled || !GOOGLE_ADSENSE_ID || GOOGLE_ADSENSE_ID.includes('xxxxxxxx')) {
    // Show placeholder if AdSense is not configured
    return (
      <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center my-6 ${
        placement === 'header' || placement === 'footer' ? 'h-24' : 'h-32'
      }`}>
        <div className="text-center">
          <p className="text-gray-600 font-semibold">Google AdSense Ad Placeholder</p>
          <p className="text-gray-500 text-sm">Placement: {placement}</p>
          <p className="text-gray-400 text-xs mt-1">Configure your AdSense ID in shared/const.ts</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`my-6 ${
      placement === 'header' || placement === 'footer' ? 'h-24' : 'h-32'
    }`}>
      {/* Google AdSense Script will be injected here */}
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
        data-ad-client={GOOGLE_ADSENSE_ID}
        data-ad-slot={AD_CONFIG.adSlots[placement as keyof typeof AD_CONFIG.adSlots] || '0'}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
