import defaultSettings from '@/defaultSettings'

const title = defaultSettings.title || 'React Ant Admin'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
