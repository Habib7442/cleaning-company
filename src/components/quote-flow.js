import { calculatePrice, PRICING_DEFAULTS } from './pricing.js';

export class QuoteFlow {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.steps = this.container.querySelectorAll('.quote-step');
    this.progressBar = document.querySelector('.quote-progress-bar');
    this.stepTitle = document.querySelector('.quote-step-title');
    this.summaryPrice = document.querySelector('.summary-total-price');
    this.summaryDetails = document.querySelector('.summary-details-list');

    this.currentStepIndex = 0;
    this.formData = this.loadSavedState() || {
      serviceType: 'home',
      size: 'medium',
      bedrooms: 2,
      bathrooms: 1,
      addons: [],
      frequency: 'biweekly',
      date: '',
      time: '',
      address: '',
      accessNotes: '',
      name: '',
      email: '',
      phone: ''
    };

    this.init();
  }

  init() {
    this.bindEvents();
    this.renderStep(this.currentStepIndex);
    this.updateSummary();
    this.generateCalendar();
  }

  bindEvents() {
    // Next/Prev Buttons
    this.container.querySelectorAll('[data-action="next"]').forEach(btn => {
      btn.addEventListener('click', () => this.nextStep());
    });

    this.container.querySelectorAll('[data-action="prev"]').forEach(btn => {
      btn.addEventListener('click', () => this.prevStep());
    });

    // Form inputs change tracking
    this.container.addEventListener('change', (e) => {
      const target = e.target;
      if (target.name === 'serviceType') {
        this.formData.serviceType = target.value;
        // Office service redirects to commercial form
        if (target.value === 'office') {
          window.location.href = '/contact.html?type=office';
          return;
        }
      } else if (target.name === 'size') {
        this.formData.size = target.value;
      } else if (target.name === 'addon') {
        if (target.checked) {
          this.formData.addons.push(target.value);
        } else {
          this.formData.addons = this.formData.addons.filter(id => id !== target.value);
        }
      } else if (target.name === 'frequency') {
        this.formData.frequency = target.value;
      } else if (target.type === 'text' || target.type === 'email' || target.type === 'tel' || target.tagName === 'TEXTAREA') {
        this.formData[target.name] = target.value;
      }

      this.saveState();
      this.updateSummary();
    });

    // Number adjusters (bedrooms, bathrooms)
    this.container.querySelectorAll('.qty-adjuster').forEach(adj => {
      const minus = adj.querySelector('.qty-minus');
      const plus = adj.querySelector('.qty-plus');
      const input = adj.querySelector('.qty-input');
      const key = input.name;

      minus.addEventListener('click', () => {
        let val = parseInt(input.value) || 0;
        val = Math.max(parseInt(input.min) || 0, val - 1);
        input.value = val;
        this.formData[key] = val;
        this.saveState();
        this.updateSummary();
      });

      plus.addEventListener('click', () => {
        let val = parseInt(input.value) || 0;
        val = Math.min(parseInt(input.max) || 99, val + 1);
        input.value = val;
        this.formData[key] = val;
        this.saveState();
        this.updateSummary();
      });
    });

    // Handle stripe form submit
    const finalForm = this.container.querySelector('.quote-final-form');
    if (finalForm) {
      finalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.submitQuote();
      });
    }
  }

  renderStep(index) {
    this.steps.forEach((step, idx) => {
      if (idx === index) {
        step.classList.remove('hidden');
        step.classList.add('active');
        
        // Populate step title
        if (this.stepTitle) {
          this.stepTitle.textContent = step.dataset.title || `Step ${idx + 1}`;
        }
      } else {
        step.classList.add('hidden');
        step.classList.remove('active');
      }
    });

    // Update progress bar
    if (this.progressBar) {
      const pct = ((index + 1) / this.steps.length) * 100;
      this.progressBar.style.width = `${pct}%`;
    }

    // Populate inputs from saved formData state if visible
    this.syncFormFields();
  }

  syncFormFields() {
    const activeStep = this.steps[this.currentStepIndex];
    if (!activeStep) return;

    // Service types
    const serviceRadio = activeStep.querySelector(`input[name="serviceType"][value="${this.formData.serviceType}"]`);
    if (serviceRadio) serviceRadio.checked = true;

    // Size
    const sizeRadio = activeStep.querySelector(`input[name="size"][value="${this.formData.size}"]`);
    if (sizeRadio) sizeRadio.checked = true;

    // Counters
    const bedInput = activeStep.querySelector('input[name="bedrooms"]');
    if (bedInput) bedInput.value = this.formData.bedrooms;

    const bathInput = activeStep.querySelector('input[name="bathrooms"]');
    if (bathInput) bathInput.value = this.formData.bathrooms;

    // Addons
    PRICING_DEFAULTS.addons.forEach(add => {
      const addonCheckbox = activeStep.querySelector(`input[name="addon"][value="${add.id}"]`);
      if (addonCheckbox) {
        addonCheckbox.checked = this.formData.addons.includes(add.id);
      }
    });

    // Frequency
    const freqRadio = activeStep.querySelector(`input[name="frequency"][value="${this.formData.frequency}"]`);
    if (freqRadio) freqRadio.checked = true;

    // Text inputs
    const textFields = ['address', 'accessNotes', 'name', 'email', 'phone'];
    textFields.forEach(field => {
      const input = activeStep.querySelector(`[name="${field}"]`);
      if (input) input.value = this.formData[field] || '';
    });
  }

  nextStep() {
    if (!this.validateCurrentStep()) return;

    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.renderStep(this.currentStepIndex);
    }
  }

  prevStep() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.renderStep(this.currentStepIndex);
    }
  }

  validateCurrentStep() {
    const step = this.steps[this.currentStepIndex];
    const inputs = step.querySelectorAll('[required]');
    let valid = true;

    // Remove existing errors
    step.querySelectorAll('.form-error-msg').forEach(el => el.remove());
    step.querySelectorAll('.form-input').forEach(el => el.style.borderColor = '');

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = 'var(--warn)';
        
        const error = document.createElement('span');
        error.className = 'form-error-msg small text-warn';
        error.style.color = 'var(--warn)';
        error.style.marginTop = '4px';
        error.textContent = 'This field is required.';
        input.parentNode.appendChild(error);
      } else if (input.type === 'email' && !/\S+@\S+\.\S+/.test(input.value)) {
        valid = false;
        input.style.borderColor = 'var(--warn)';
        
        const error = document.createElement('span');
        error.className = 'form-error-msg small text-warn';
        error.style.color = 'var(--warn)';
        error.style.marginTop = '4px';
        error.textContent = 'Please enter a valid email address.';
        input.parentNode.appendChild(error);
      }
    });

    // Special validation for step 5 (Date and Time)
    if (step.dataset.stepId === 'datetime') {
      if (!this.formData.date || !this.formData.time) {
        valid = false;
        const errContainer = step.querySelector('.datetime-error-container');
        if (errContainer) {
          errContainer.innerHTML = '<span class="text-warn small" style="color: var(--warn);">Please select a date and an available time slot.</span>';
        }
      }
    }

    return valid;
  }

  updateSummary() {
    const price = calculatePrice(
      this.formData.size,
      this.formData.frequency,
      this.formData.addons,
      this.formData.serviceType
    );

    if (this.summaryPrice) {
      this.summaryPrice.textContent = `${PRICING_DEFAULTS.currency.symbol}${price}`;
    }

    if (this.summaryDetails) {
      const items = [];
      
      const sizeObj = PRICING_DEFAULTS.sizes.find(s => s.id === this.formData.size);
      const freqObj = PRICING_DEFAULTS.frequencies.find(f => f.id === this.formData.frequency);
      
      items.push(`<li><strong>Service:</strong> ${this.formData.serviceType.toUpperCase()} CLEAN</li>`);
      items.push(`<li><strong>Home Size:</strong> ${sizeObj?.name || this.formData.size} (${this.formData.bedrooms} Bed, ${this.formData.bathrooms} Bath)</li>`);
      items.push(`<li><strong>Frequency:</strong> ${freqObj?.name || this.formData.frequency}</li>`);
      
      if (this.formData.addons.length > 0) {
        const addonNames = this.formData.addons.map(id => {
          const add = PRICING_DEFAULTS.addons.find(a => a.id === id);
          return add ? add.name : id;
        });
        items.push(`<li><strong>Add-ons:</strong> ${addonNames.join(', ')}</li>`);
      }

      if (this.formData.date) {
        items.push(`<li><strong>Schedule:</strong> ${this.formData.date} at ${this.formData.time}</li>`);
      }

      this.summaryDetails.innerHTML = items.join('');
    }
  }

  generateCalendar() {
    const calendarContainer = this.container.querySelector('.quote-calendar-grid');
    const slotContainer = this.container.querySelector('.quote-slots-grid');
    if (!calendarContainer || !slotContainer) return;

    // Clear content
    calendarContainer.innerHTML = '';
    slotContainer.innerHTML = '';

    const today = new Date();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Generate next 12 days
    for (let i = 1; i <= 12; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);

      // Skip Sundays for cleaning
      if (nextDate.getDay() === 0) continue;

      const dateButton = document.createElement('button');
      dateButton.type = 'button';
      dateButton.className = 'calendar-day-btn btn-ghost';
      dateButton.style.padding = '12px 8px';
      dateButton.style.display = 'flex';
      dateButton.style.flexDirection = 'column';
      dateButton.style.alignItems = 'center';
      dateButton.style.borderRadius = 'var(--radius)';
      dateButton.style.border = '1px solid var(--stone)';

      dateButton.innerHTML = `
        <span class="small uppercase" style="font-family: var(--font-mono); font-size: 10px;">${daysOfWeek[nextDate.getDay()]}</span>
        <strong style="font-size: 1.2rem; font-family: var(--font-display);">${nextDate.getDate()}</strong>
        <span style="font-size: 10px; color: var(--text-muted);">${months[nextDate.getMonth()]}</span>
      `;

      const dateStr = `${months[nextDate.getMonth()]} ${nextDate.getDate()}, ${nextDate.getFullYear()}`;
      if (this.formData.date === dateStr) {
        dateButton.classList.add('active', 'btn-primary');
        dateButton.classList.remove('btn-ghost');
      }

      dateButton.addEventListener('click', () => {
        calendarContainer.querySelectorAll('.calendar-day-btn').forEach(btn => {
          btn.classList.remove('active', 'btn-primary');
          btn.classList.add('btn-ghost');
        });
        dateButton.classList.add('active', 'btn-primary');
        dateButton.classList.remove('btn-ghost');

        this.formData.date = dateStr;
        this.saveState();
        this.updateSummary();
        this.showTimeSlots(slotContainer);
      });

      calendarContainer.appendChild(dateButton);
    }

    if (this.formData.date) {
      this.showTimeSlots(slotContainer);
    }
  }

  showTimeSlots(container) {
    container.innerHTML = '';
    const slots = ['08:00 AM', '11:00 AM', '02:00 PM', '05:00 PM'];

    slots.forEach(slot => {
      const slotButton = document.createElement('button');
      slotButton.type = 'button';
      slotButton.className = 'slot-btn btn-ghost';
      slotButton.style.padding = '12px';
      slotButton.style.border = '1px solid var(--stone)';
      slotButton.style.borderRadius = 'var(--radius)';
      slotButton.style.fontFamily = 'var(--font-mono)';
      slotButton.style.fontSize = '0.9rem';
      slotButton.textContent = slot;

      if (this.formData.time === slot) {
        slotButton.classList.add('active', 'btn-primary');
        slotButton.classList.remove('btn-ghost');
      }

      slotButton.addEventListener('click', () => {
        container.querySelectorAll('.slot-btn').forEach(btn => {
          btn.classList.remove('active', 'btn-primary');
          btn.classList.add('btn-ghost');
        });
        slotButton.classList.add('active', 'btn-primary');
        slotButton.classList.remove('btn-ghost');

        this.formData.time = slot;
        this.saveState();
        this.updateSummary();

        // Clear datetime error
        const errContainer = this.container.querySelector('.datetime-error-container');
        if (errContainer) errContainer.innerHTML = '';
      });

      container.appendChild(slotButton);
    });
  }

  submitQuote() {
    const submitBtn = this.container.querySelector('.submit-booking-btn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Securing booking...';
    }

    // Simulate network latency & payment validation
    setTimeout(() => {
      // Clear localStorage state on success
      localStorage.removeItem('lustra_quote_flow');

      // Hide flow and show confirmation screen
      const flowWrapper = this.container.querySelector('.quote-flow-wrapper');
      const confirmationWrapper = this.container.querySelector('.quote-confirmation-wrapper');
      
      if (flowWrapper) flowWrapper.classList.add('hidden');
      if (confirmationWrapper) {
        confirmationWrapper.classList.remove('hidden');
        
        // Render details on confirmation screen
        const confText = confirmationWrapper.querySelector('.conf-details');
        if (confText) {
          const price = calculatePrice(
            this.formData.size,
            this.formData.frequency,
            this.formData.addons,
            this.formData.serviceType
          );
          confText.innerHTML = `
            <p style="margin-bottom: var(--s-3);"><strong>Booking Reference:</strong> LST-${Math.floor(100000 + Math.random() * 900000)}</p>
            <p style="margin-bottom: var(--s-3);"><strong>Service:</strong> ${this.formData.serviceType.toUpperCase()} CLEAN</p>
            <p style="margin-bottom: var(--s-3);"><strong>Schedule:</strong> ${this.formData.date} at ${this.formData.time}</p>
            <p style="margin-bottom: var(--s-3);"><strong>Address:</strong> ${this.formData.address}</p>
            <p style="margin-bottom: var(--s-3);"><strong>Pricing:</strong> ${PRICING_DEFAULTS.currency.symbol}${price} (billed securely via Stripe)</p>
          `;
        }
      }

      // Smooth scroll to top to see confirmation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  }

  saveState() {
    localStorage.setItem('lustra_quote_flow', JSON.stringify({
      currentStepIndex: this.currentStepIndex,
      formData: this.formData
    }));
  }

  loadSavedState() {
    const saved = localStorage.getItem('lustra_quote_flow');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.currentStepIndex = parsed.currentStepIndex || 0;
        return parsed.formData;
      } catch (e) {
        return null;
      }
    }
    return null;
  }
}
