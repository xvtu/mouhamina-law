<template>
  <div class="pt-20">
    <SEOHead 
      title="Legal Services in Syria - Mouhamina Law Office | NGO Registration & Business Licensing"
      description="Complete legal services in Syria: NGO registration, business licensing, legal representation, contract development, capacity building, and legislative reform. Expert legal consultancy for organizations and businesses."
      keywords="legal services Syria, NGO registration Syria, business licensing Damascus, legal representation Syria, contract development, capacity building training, legislative reform Syria, civil society registration"
      url="/services"
    />
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-secondary to-secondary-light text-white">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6">{{ $t('services.hero.title') }}</h1>
          <p class="text-xl md:text-2xl text-gray-200 leading-relaxed">
            {{ $t('services.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 bg-warm-gray">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Service 1: Legal Consultancy -->
          <div class="card-elegant p-8">
            <div class="flex items-start space-x-6">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <span class="text-sm text-primary font-medium">01.</span>
                <h3 class="text-2xl font-serif font-semibold text-secondary mb-4">
                  {{ $t('services.consultancy.title') }}
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  {{ $t('services.consultancy.description') }}
                </p>
                <ul class="text-gray-600 space-y-2">
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.consultancy.features.compliance') }}</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.consultancy.features.risk') }}</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.consultancy.features.coordination') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Service 2: Registration & Licensing -->
          <div class="card-elegant p-8">
            <div class="flex items-start space-x-6">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m4-8V5a2 2 0 00-2-2H9m4 4v6m0-6h2a2 2 0 012 2v6a2 2 0 01-2 2h-2"/>
                </svg>
              </div>
              <div>
                <span class="text-sm text-primary font-medium">02.</span>
                <h3 class="text-2xl font-serif font-semibold text-secondary mb-4">
                  {{ $t('services.registration.title') }}
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  {{ $t('services.registration.description') }}
                </p>
                <ul class="text-gray-600 space-y-2">
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.registration.features.ngo') }}</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.registration.features.company') }}</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.registration.features.renewals') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Service 3: Legal Representation -->
          <div class="card-elegant p-8">
            <div class="flex items-start space-x-6">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                </svg>
              </div>
              <div>
                <span class="text-sm text-primary font-medium">03.</span>
                <h3 class="text-2xl font-serif font-semibold text-secondary mb-4">
                  {{ $t('services.representation.title') }}
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  {{ $t('services.representation.description') }}
                </p>
                <ul class="text-gray-600 space-y-2">
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.representation.features.court') }}</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.representation.features.negotiations') }}</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.representation.features.disputes') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Service 4: Legislative Reform -->
          <div class="card-elegant p-8">
            <div class="flex items-start space-x-6">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <div>
                <span class="text-sm text-primary font-medium">04.</span>
                <h3 class="text-2xl font-serif font-semibold text-secondary mb-4">
                  {{ $t('services.reform.title') }}
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  {{ $t('services.reform.description') }}
                </p>
                <ul class="text-gray-600 space-y-2">
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.reform.features.analysis') }}</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.reform.features.advocacy') }}</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.reform.features.framework') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Service 5: Capacity Building -->
          <div class="card-elegant p-8">
            <div class="flex items-start space-x-6">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <div>
                <span class="text-sm text-primary font-medium">05.</span>
                <h3 class="text-2xl font-serif font-semibold text-secondary mb-4">
                  {{ $t('services.training.title') }}
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  {{ $t('services.training.description') }}
                </p>
                <ul class="text-gray-600 space-y-2">
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.training.features.workshops') }}</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.training.features.governance') }}</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.training.features.protection') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Service 6: Contract Development -->
          <div class="card-elegant p-8">
            <div class="flex items-start space-x-6">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <span class="text-sm text-primary font-medium">06.</span>
                <h3 class="text-2xl font-serif font-semibold text-secondary mb-4">
                  {{ $t('services.contracts.title') }}
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  {{ $t('services.contracts.description') }}
                </p>
                <ul class="text-gray-600 space-y-2">
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.contracts.features.drafting') }}</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.contracts.features.ip') }}</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span>{{ $t('services.contracts.features.auditing') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Collaborations -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('services.collaborations.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ $t('services.collaborations.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- UNDP -->
          <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 20 12 16.77 5.82 20 7 13.87 2 9l6.91-.74L12 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-serif font-semibold text-secondary mb-4">{{ $t('services.collaborations.undp.title') }}</h3>
            <p class="text-gray-600">
              {{ $t('services.collaborations.undp.description') }}
            </p>
          </div>

          <!-- UNICEF -->
          <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div class="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-serif font-semibold text-secondary mb-4">{{ $t('services.collaborations.unicef.title') }}</h3>
            <p class="text-gray-600">
              {{ $t('services.collaborations.unicef.description') }}
            </p>
          </div>

          <!-- Swiss Foreign Ministry -->
          <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-serif font-semibold text-secondary mb-4">{{ $t('services.collaborations.swiss.title') }}</h3>
            <p class="text-gray-600">
              {{ $t('services.collaborations.swiss.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Training Programs -->
    <section class="py-20 bg-accent-cream">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('services.programs.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ $t('services.programs.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
            <h3 class="text-xl font-serif font-semibold text-secondary mb-4">{{ $t('services.programs.civil.title') }}</h3>
            <div class="text-3xl font-bold text-primary mb-2">112</div>
            <p class="text-gray-600 mb-4">{{ $t('services.programs.civil.participants') }}</p>
            <p class="text-sm text-gray-500">
              {{ $t('services.programs.civil.description') }}
            </p>
          </div>

          <div class="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
            <h3 class="text-xl font-serif font-semibold text-secondary mb-4">{{ $t('services.programs.child.title') }}</h3>
            <div class="text-3xl font-bold text-primary mb-2">6,200</div>
            <p class="text-gray-600 mb-4">{{ $t('services.programs.child.participants') }}</p>
            <p class="text-sm text-gray-500">
              {{ $t('services.programs.child.description') }}
            </p>
          </div>

          <div class="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
            <h3 class="text-xl font-serif font-semibold text-secondary mb-4">{{ $t('services.programs.legal.title') }}</h3>
            <div class="text-3xl font-bold text-primary mb-2">4</div>
            <p class="text-gray-600 mb-4">{{ $t('services.programs.legal.participants') }}</p>
            <p class="text-sm text-gray-500">
              {{ $t('services.programs.legal.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-secondary text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-serif font-bold mb-6">
          {{ $t('services.cta.title') }}
        </h2>
        <p class="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          {{ $t('services.cta.description') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contact" class="btn-primary">
            {{ $t('services.cta.getConsultation') }}
          </router-link>
          <a href="tel:+963932244513" class="btn-secondary">
            {{ $t('services.cta.callNow') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SEOHead from '../components/SEOHead.vue'

export default {
  name: 'Services',
  components: {
    SEOHead
  }
}
</script>