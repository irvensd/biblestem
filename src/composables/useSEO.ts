/**
 * SEO Composable
 * Manages dynamic meta tags, structured data, and SEO optimization for each page
 */

import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  canonicalUrl?: string
  noindex?: boolean
  structuredData?: Record<string, any>
}

const DEFAULT_SEO: SEOConfig = {
  title: 'BibleStem - Free Interactive Bible Study Platform | Donation-Based Ministry',
  description: '100% free Bible study platform with Hebrew & Greek insights, interactive lessons, and daily devotions. Donation-based ministry spreading the Gospel freely to everyone.',
  keywords: 'free bible study, interactive bible study, hebrew greek study, biblical insights, daily devotions, christian learning, bible lessons, scripture study, donation ministry',
  ogImage: 'https://biblestem.vercel.app/icons/icon-512x512.png',
  ogType: 'website',
}

export function useSEO(config?: Partial<SEOConfig>) {
  const route = useRoute()
  const baseUrl = 'https://biblestem.vercel.app'

  /**
   * Update document title
   */
  const updateTitle = (title: string): void => {
    document.title = title
  }

  /**
   * Update or create meta tag
   */
  const updateMetaTag = (name: string, content: string, property?: boolean): void => {
    const attr = property ? 'property' : 'name'
    let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement

    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attr, name)
      document.head.appendChild(element)
    }

    element.setAttribute('content', content)
  }

  /**
   * Update canonical URL
   */
  const updateCanonical = (url: string): void => {
    let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement

    if (!element) {
      element = document.createElement('link')
      element.setAttribute('rel', 'canonical')
      document.head.appendChild(element)
    }

    element.setAttribute('href', url)
  }

  /**
   * Add structured data (JSON-LD)
   */
  const addStructuredData = (data: Record<string, any>): void => {
    // Remove existing structured data
    const existing = document.querySelector('script[type="application/ld+json"]')
    if (existing) {
      existing.remove()
    }

    // Add new structured data
    const script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }

  /**
   * Apply SEO configuration
   */
  const applySEO = (seoConfig: Partial<SEOConfig>): void => {
    const finalConfig: SEOConfig = {
      ...DEFAULT_SEO,
      ...seoConfig,
    }

    // Update title
    updateTitle(finalConfig.title)

    // Update meta description
    updateMetaTag('description', finalConfig.description)

    // Update keywords
    if (finalConfig.keywords) {
      updateMetaTag('keywords', finalConfig.keywords)
    }

    // Update robots
    if (finalConfig.noindex) {
      updateMetaTag('robots', 'noindex, nofollow')
    } else {
      updateMetaTag('robots', 'index, follow')
    }

    // Update Open Graph tags
    updateMetaTag('og:title', finalConfig.title, true)
    updateMetaTag('og:description', finalConfig.description, true)
    updateMetaTag('og:type', finalConfig.ogType || 'website', true)
    updateMetaTag('og:image', finalConfig.ogImage || DEFAULT_SEO.ogImage!, true)
    updateMetaTag('og:site_name', 'BibleStem', true)

    // Update canonical URL
    const canonical = finalConfig.canonicalUrl || `${baseUrl}${route.path}`
    updateCanonical(canonical)
    updateMetaTag('og:url', canonical, true)

    // Update Twitter cards
    updateMetaTag('twitter:card', 'summary_large_image', true)
    updateMetaTag('twitter:title', finalConfig.title, true)
    updateMetaTag('twitter:description', finalConfig.description, true)
    updateMetaTag('twitter:image', finalConfig.ogImage || DEFAULT_SEO.ogImage!, true)

    // Add structured data if provided
    if (finalConfig.structuredData) {
      addStructuredData(finalConfig.structuredData)
    }
  }

  /**
   * Generate organization structured data
   */
  const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BibleStem',
    description: 'Free interactive Bible study platform - Donation-based ministry',
    url: baseUrl,
    logo: `${baseUrl}/icons/icon-512x512.png`,
    sameAs: [
      // Add social media URLs when available
    ],
  })

  /**
   * Generate website structured data
   */
  const getWebsiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BibleStem',
    description: 'Free interactive Bible study platform with Hebrew & Greek insights',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/study-series?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  })

  /**
   * Generate article/course structured data
   */
  const getArticleSchema = (article: {
    title: string
    description: string
    datePublished?: string
    dateModified?: string
    author?: string
    image?: string
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || `${baseUrl}/icons/icon-512x512.png`,
    datePublished: article.datePublished || new Date().toISOString(),
    dateModified: article.dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: article.author || 'BibleStem Ministry',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BibleStem',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/icons/icon-512x512.png`,
      },
    },
  })

  /**
   * Generate course structured data for Bible studies
   */
  const getCourseSchema = (course: {
    name: string
    description: string
    provider?: string
    totalLessons?: number
    estimatedDuration?: string
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: course.provider || 'BibleStem Ministry',
      sameAs: baseUrl,
    },
    educationalLevel: 'All levels',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: course.estimatedDuration || 'Self-paced',
    },
    numberOfCredits: course.totalLessons,
    isAccessibleForFree: true,
    inLanguage: 'en',
  })

  /**
   * Generate breadcrumb structured data
   */
  const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  })

  /**
   * Generate FAQ structured data
   */
  const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  })

  // Apply initial config if provided
  if (config) {
    onMounted(() => {
      applySEO(config)
    })
  }

  return {
    applySEO,
    updateTitle,
    updateMetaTag,
    updateCanonical,
    addStructuredData,
    getOrganizationSchema,
    getWebsiteSchema,
    getArticleSchema,
    getCourseSchema,
    getBreadcrumbSchema,
    getFAQSchema,
  }
}

