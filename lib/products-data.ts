export type SubProduct = {
  id: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
  aiHint?: string;
};

export type Product = {
  id: string;
  title: string;
  categoryVideoPlaceholderUrl?: string;
  categoryVideoAiHint?: string;
  brochureUrl?: string;
  subProducts?: SubProduct[];
};

export const products: Product[] = [
  {
    id: 'inspection-solutions',
    title: 'Inspection Solutions',
    brochureUrl: '/brochures/inspection-solutions.pdf',
    categoryVideoPlaceholderUrl: '/videos/inspection-placeholder.jpg',
    categoryVideoAiHint: 'inspection machine overview',
    subProducts: [
      {
        id: 'vision-inspector',
        name: 'Vision Inspection System',
        imageSrc: '/products/vision-inspector.jpg',
        imageAlt: 'Vision Inspection System',
        aiHint: 'camera-based inspection system'
      },
      {
        id: 'weight-checker',
        name: 'Check Weigher',
        imageSrc: '/products/weight-checker.jpg',
        imageAlt: 'Check Weigher Machine',
        aiHint: 'weight inspection system'
      },
      {
        id: 'weight-checker',
        name: 'Check Weigher',
        imageSrc: '/products/weight-checker.jpg',
        imageAlt: 'Check Weigher Machine',
        aiHint: 'weight inspection system'
      },
    ]
  },
  {
    id: 'tea-coffee-vending',
    title: 'Tea & Coffee Vending Machines',
    brochureUrl: '/brochures/vending-machines.pdf',
    categoryVideoPlaceholderUrl: '/videos/vending-placeholder.jpg',
    categoryVideoAiHint: 'vending machine demo',
    subProducts: [
      {
        id: 'tea-vend',
        name: 'Tea Vending Machine',
        imageSrc: '/products/tea-vend.jpg',
        imageAlt: 'Automatic Tea Vending Machine',
        aiHint: 'tea dispenser machine'
      },
      {
        id: 'coffee-vend',
        name: 'Coffee Vending Machine',
        imageSrc: '/products/coffee-vend.jpg',
        imageAlt: 'Coffee Vending Machine',
        aiHint: 'coffee dispenser machine'
      }
    ]
  },
  {
    id: 'water-treatment',
    title: 'Water Treatment Plants',
    brochureUrl: '/brochures/water-treatment.pdf',
    categoryVideoPlaceholderUrl: '/videos/water-placeholder.jpg',
    categoryVideoAiHint: 'water purification plant overview',
    subProducts: [
      {
        id: 'ro-plant',
        name: 'RO Water Plant',
        imageSrc: '/products/ro-plant.jpg',
        imageAlt: 'RO Water Purification System',
        aiHint: 'reverse osmosis plant'
      },
      {
        id: 'effluent-treatment',
        name: 'Effluent Treatment Plant',
        imageSrc: '/products/etp.jpg',
        imageAlt: 'Effluent Treatment Plant',
        aiHint: 'industrial effluent treatment'
      }
    ]
  },
  {
    id: 'packaging-machines',
    title: 'Packaging Machines',
    brochureUrl: '/brochures/packaging-machines.pdf',
    categoryVideoPlaceholderUrl: '/videos/packaging-placeholder.jpg',
    categoryVideoAiHint: 'automated packaging machine demo',
    subProducts: [
      {
        id: 'flow-wrap',
        name: 'Flow Wrap Machine',
        imageSrc: '/products/flow-wrap.jpg',
        imageAlt: 'Flow Wrap Machine',
        aiHint: 'horizontal packaging flow wrapper'
      },
      {
        id: 'vffs',
        name: 'VFFS Machine',
        imageSrc: '/products/vffs.jpg',
        imageAlt: 'Vertical Form Fill Seal Machine',
        aiHint: 'vffs pouch machine'
      }
    ]
  },
  {
    id: 'printing-solutions',
    title: 'Printing Solutions',
    brochureUrl: '/brochures/printing-solutions.pdf',
    categoryVideoPlaceholderUrl: '/videos/printing-placeholder.jpg',
    categoryVideoAiHint: 'industrial printer demo',
    subProducts: [
      {
        id: 'batch-coding',
        name: 'Batch Coding Machine',
        imageSrc: '/products/batch-coding.jpg',
        imageAlt: 'Batch Coding Printer',
        aiHint: 'batch coding inkjet printer'
      },
      {
        id: 'label-printer',
        name: 'Label Printer',
        imageSrc: '/products/label-printer.jpg',
        imageAlt: 'Label Printing Machine',
        aiHint: 'label printing system'
      }
    ]
  },
  {
    id: 'display-advertising',
    title: 'Display & Advertising',
    brochureUrl: '/brochures/display-advertising.pdf',
    categoryVideoPlaceholderUrl: '/videos/display-placeholder.jpg',
    categoryVideoAiHint: 'digital display advertisement demo',
    subProducts: [
      {
        id: 'led-wall',
        name: 'LED Video Wall',
        imageSrc: '/products/led-wall.jpg',
        imageAlt: 'LED Display Wall',
        aiHint: 'indoor outdoor LED screen'
      },
      {
        id: 'kiosk',
        name: 'Interactive Kiosk',
        imageSrc: '/products/kiosk.jpg',
        imageAlt: 'Touch Kiosk Display',
        aiHint: 'interactive touchscreen kiosk'
      }
    ]
  }
];
