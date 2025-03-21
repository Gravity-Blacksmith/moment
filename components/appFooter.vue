<template>
  <footer>
    <div
      class="footer relative bg-primary-100 text-white-200 py-10 overflow-hidden z-0"
    >
      <div class="hidden md:block absolute top-0 left-0 w-full -z-1">
        <NuxtImg
          src="moment_saas_esg_hero_lines.svg"
          alt="Header SVG"
          class="w-full opacity-55"
        />
      </div>
      <div class="container mx-auto max-w-[1200px] px-10">
        <div class="flex justify-center mb-6">
          <MomentLogo class="h-6 w-auto fill-white-200" />
        </div>
        <hr class="border-white-200 mb-6" />
        <div class="flex justify-center space-x-4 mb-6">
          <a
            href="https://www.linkedin.com/company/moment-green/"
            target="_blank"
            rel="noreferrer noopener"
            class="cursor-pointer"
          >
            <div class="rounded-full overflow-hidden">
              <NuxtImg
                src="linkedin_logo.svg"
                alt="Moment Green AI"
                class="h-8 w-auto"
              />
            </div>
          </a>
        </div>
        <div class="text-center text-sm">
          &copy; {{ new Date().getFullYear() }} Moment.green. All rights
          reserved.
        </div>
      </div>
    </div>
  </footer>
</template>
