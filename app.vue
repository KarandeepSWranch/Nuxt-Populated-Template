<template>
  <NuxtLayout>
    <SeoKit />
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const { siteName, siteUrl, siteDescription, socials } = useRuntimeConfig().public;

const organization = defineOrganization({
    name: siteName,
    logo: '/logo.png',
    description: siteDescription,
    sameAs: socials
});

useSchemaOrg([
    organization,
    defineWebSite({
        name: siteName,
        url: siteUrl,
        publisher: organization.mainEntity,
        description: siteDescription
    })
]);

useServerSeoMeta({
    ogImage: '/ogImage.png',
    twitterCard: 'summary_large_image',
    twitterImage: '/twitterImage.png',
    viewport: 'width=device-width, initial-scale=0.8, user-scalable=0'
});
</script>
