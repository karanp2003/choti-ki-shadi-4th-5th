/**
 * ====================================================================
 * BLUSH & GOLD WEDDING INVITATION CONFIGURATION
 * ====================================================================
 * Customised for: Antima Patodiya & Saksham Mathur
 * Theme: Blush & Gold (InviteVibes)
 */

window.WEDDING_CONFIG = {
  // Public link + WhatsApp preview (og:image is /og-share.jpg at your Vercel URL)
  share: {
    ogTitle: "Wedding Invitation — Antima & Saksham",
    sharePhoto: "share-source.jpg",
    ogDescription:
      "With love and blessings, you're invited to celebrate our wedding on 5 December 2026. Tap to open your invitation.",
    ogImagePath: "/og-share.jpg",
    whatsappText:
      "With love and blessings, join us as we celebrate the wedding of Antima Patodiya & Saksham Mathur on 5 December 2026!",
    productionUrl: "https://choti-ki-shadi.vercel.app/",
    // Public OG Image URL for link preview
    ogImageUrl: "https://choti-ki-shadi.vercel.app/og-share.jpg",
  },

  // Theme styling
  theme: {
    name: "modern-bliss",
    primaryColor: "#9E4D56",      // Burgundy / terracotta (envelope)
    accentColor: "#B8956A",       // Antique gold
    headingFont: "Alex Brush",
    nameFont: "Alex Brush",
    bodyFont: "Cormorant Garamond",
    petalsEnabled: true,
    petalIntensity: 0.4,
  },

  // Wedding background song
  audio: {
    enabled: true,
    title: "Leja — Lost Stories",
    src: "leja-lost-stories.mp3",
  },

  // Modern Bliss entry gate (red terracotta envelope — same video as invitevibes.in Modern Bliss)
  entry: {
    enabled: true,
    variantType: "type2",
    overlayStyle: "light",
    tapHintTopPercent: 48,
    entryVariantId: "entry-video-envelope-10",
    videoUrl:
      "https://pub-1953a6673e864f3488c645252f75de98.r2.dev/website%20assets/New%20Envelope/1%20(10).mp4",
    message: "With love and blessings,\nwe invite you to the wedding of\nAntima & Saksham",
    tapHint: "Tap to Open",
    loaderNames: "Antima & Saksham",
  },

  // Hero Section
  hero: {
    ganeshImageUrl: "https://pub-1953a6673e864f3488c645252f75de98.r2.dev/website%20assets/godsymbols/1.webp",
    godQuote: "|| Shree Ganeshay Namah ||",
    blessingLine: "With the divine blessings of God and our revered elders,",
    parentsLine: "Mrs. Nirmala and Mr. Narendra Patodiya",
    introLine:
      "request the pleasure of your company to celebrate the marriage of their beloved daughter",
    connector: "with",
    bride: {
      name: "Antima",
      familyLine: "(Granddaughter of Smt. Shakuntala Devi & Late Shri Ghasi Lal Patodiya)",
    },
    groom: {
      name: "Saksham",
      familyLine: "(Son of Dr. Manisha Ji & Shailendra Ji Mathur)",
    },
    weddingDateText: "Saturday · 5th December 2026",
    weddingLocationText: "Saryu Mahal · Jagatpura, Jaipur",
  },

  // Live Countdown & Save the Date
  countdown: {
    heading: "Forever Begins In",
    targetDate: "2026-12-05T13:00:00", // 5th December 2026, 1:00 PM
  },

  // Welcome Note
  welcome: {
    heading: "Dear Friends and Family,",
    message: "As we embark on this beautiful new chapter of our lives, we seek your warmest love and blessings. Your presence will make our celebrations truly unforgettable.",
  },

  // Romantic Moments / Our Story
  story: {
    subheading: "Our Story",
    heading: "Forever Us",
    items: [
      {
        image: "couple-4.jpg",
        caption: "Cherished Smiles",
        text: "A lifetime of love, laughter, and endless happiness.",
      },
      {
        image: "https://pub-1953a6673e864f3488c645252f75de98.r2.dev/April/Demo/download%20(2).jfif",
        caption: "Where It Began",
        text: "From casual conversations to laughter that never ended, our journey quietly began.",
      },
      {
        image: "https://pub-1953a6673e864f3488c645252f75de98.r2.dev/April/Demo/download%20(3).jfif",
        caption: "Joy & Togetherness",
        text: "Every single day with you is a celebration of love, friendship, and joy.",
      },
      {
        image: "https://pub-1953a6673e864f3488c645252f75de98.r2.dev/April/Demo/%F0%9F%91%A5%F0%9F%92%97.jfif",
        caption: "Our Forever Begins",
        text: "Surrounded by our families, prayers, and pure love, two souls unite for eternity.",
      },
      {
        image: "https://pub-1953a6673e864f3488c645252f75de98.r2.dev/April/Demo/%F0%9F%92%96.jfif",
        caption: "Written In The Stars",
        text: "Two hearts, one lifelong promise. Forever starts right here, right now.",
      },
    ],
  },

  // Modern Bliss wedding ceremony (5th December)
  events: {
    subheading: "The Celebration Unfolds",
    heading: "The Wedding\nCeremony",
    intro: "Join us as two loving souls unite in holy matrimony surrounded by family and blessings.",
    // Bake background + invite text into one canvas “video” per card (set false to use HTML overlay only)
    compositeVideoCards: true,
    items: [
      {
        id: "wedding",
        dayTitle: "The Sacred Union",
        cardTitle: "Wedding",
        title: "Wedding Ceremony",
        date: "Saturday · 05 December 2026",
        inviteDate: { weekday: "Saturday", day: "05", monthYear: "Dec 2026" },
        time: "1 PM Onwards",
        description:
          "The auspicious Baraat, Varmala, and seven sacred pheras around the holy fire, followed by a Royal Wedding Feast.",
        venue: "Saryu Mahal Jagatpura Jaipur",
        mapsUrl:
          "https://www.google.com/maps/place/SARYU+MAHAL/data=!4m2!3m1!1s0x0:0xfb42f68b71525903?sa=X&ved=1t:2428&ictx=111",
        video:
          "https://pub-1953a6673e864f3488c645252f75de98.r2.dev/website%20assets/events-optimized/wedding/1.mp4",
        inviteStyle: "arch",
        highlighted: true,
      },
    ],
  },

  // Venue & Location
  venue: {
    subheading: "Where We Gather",
    heading: "The Royal Venue",
    name: "Royal Heritage Palace & Resorts",
    address: "Palace Road, Near Heritage Garden, Jaipur, Rajasthan",
    image: "https://pub-1953a6673e864f3488c645252f75de98.r2.dev/may/Balapriya%20%26%5C/ChatGPT%20Image%20May%2030%2C%202026%2C%2009_57_15%20AM.png",
    mapsUrl: "https://maps.google.com/?q=Jaipur",
    buttonLabel: "View on Google Maps",
  },



  // Footer & Blessings
  footer: {
    message: "Your gracious presence will turn our special day into a celebration of love, laughter, and lifelong memories.",
    regards: "With heartfelt gratitude & blessings,",
    familyLine: "Patodiya & Mathur Families",
    contacts: [
      { name: "Patodiya Family Coordinator", phone: "+91 98765 43210" },
      { name: "Mathur Family Coordinator", phone: "+91 98765 43211" },
    ],
  },
};
