/**
 * Lustra dynamic pricing data and helper calculations.
 */

export const PRICING_DEFAULTS = {
  currency: { symbol: '$', code: 'USD' },
  sizes: [
    { id: 'studio', name: 'Studio', basePrice: 120 },
    { id: 'medium', name: '1–2 Bedroom', basePrice: 160 },
    { id: 'large', name: '3–4 Bedroom', basePrice: 240 },
    { id: 'estate', name: '5+ Bed / Home', basePrice: 340 }
  ],
  frequencies: [
    { id: 'oneoff', name: 'One-off', discount: 0, label: 'Single visit' },
    { id: 'monthly', name: 'Monthly', discount: 0.10, label: 'Save 10%' },
    { id: 'biweekly', name: 'Biweekly', discount: 0.15, label: 'Save 15%' },
    { id: 'weekly', name: 'Weekly', discount: 0.20, label: 'Save 20%' }
  ],
  addons: [
    { id: 'oven', name: 'Inside Oven', price: 45, icon: 'Flame' },
    { id: 'fridge', name: 'Inside Fridge', price: 35, icon: 'Refrigerator' },
    { id: 'windows', name: 'Interior Windows', price: 50, icon: 'Tv' },
    { id: 'laundry', name: 'Laundry & Fold', price: 40, icon: 'Shirt' },
    { id: 'cabinets', name: 'Inside Cabinets', price: 60, icon: 'Grid' }
  ],
  serviceFactors: {
    home: 1.0,
    deep: 1.5,
    move: 1.8,
    shortlet: 1.2
  }
};

/**
 * Calculates the exact price for a set of options.
 * @param {string} sizeId 
 * @param {string} frequencyId 
 * @param {string[]} addonIds 
 * @param {string} serviceType 
 * @returns {number} Calculated total price
 */
export function calculatePrice(sizeId, frequencyId, addonIds = [], serviceType = 'home') {
  const size = PRICING_DEFAULTS.sizes.find(s => s.id === sizeId) || PRICING_DEFAULTS.sizes[0];
  const frequency = PRICING_DEFAULTS.frequencies.find(f => f.id === frequencyId) || PRICING_DEFAULTS.frequencies[0];
  
  const factor = PRICING_DEFAULTS.serviceFactors[serviceType] || 1.0;
  let base = size.basePrice * factor;

  // Apply frequency discount
  base = base * (1 - frequency.discount);

  // Add-ons are flat additions
  let addonsSum = 0;
  addonIds.forEach(id => {
    const add = PRICING_DEFAULTS.addons.find(a => a.id === id);
    if (add) addonsSum += add.price;
  });

  return Math.round(base + addonsSum);
}

/**
 * Initializer for any inline pricing tables/calculators.
 */
export function initPricingSelectors() {
  const frequencyToggles = document.querySelectorAll('.pricing-frequency-toggle');
  
  frequencyToggles.forEach(toggle => {
    const buttons = toggle.querySelectorAll('[data-freq]');
    const table = document.querySelector(toggle.dataset.targetTable || '.pricing-table');

    if (!table) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active visual states
        buttons.forEach(b => b.classList.remove('active', 'btn-primary'));
        buttons.forEach(b => b.classList.add('btn-ghost'));
        btn.classList.add('active', 'btn-primary');
        btn.classList.remove('btn-ghost');

        const freqId = btn.dataset.freq;
        const frequency = PRICING_DEFAULTS.frequencies.find(f => f.id === freqId);
        
        // Update all prices shown in the table
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
          const base = parseFloat(row.dataset.basePrice);
          if (isNaN(base)) return;

          const factor = parseFloat(row.dataset.factor || 1.0);
          const finalPrice = Math.round((base * factor) * (1 - (frequency?.discount || 0)));
          
          const priceDisplay = row.querySelector('.row-price-value');
          if (priceDisplay) {
            priceDisplay.textContent = `${PRICING_DEFAULTS.currency.symbol}${finalPrice}`;
          }
        });
      });
    });
  });
}
