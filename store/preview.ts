import { defineStore } from 'pinia'

export const usePreviewStore = defineStore('previewStore', () => {
  let titlePreview = 'titolo | sito';
  let descrPreview = 'Duis do fugiat non ex. Ad ullamco cillum eu consequat voluptate fugiat labore incididunt dolore dolore in Lorem aliquip cupidatat.';

  
  return { titlePreview, descrPreview }
})