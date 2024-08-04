import { defineStore } from 'pinia'

export const usePreviewStore = defineStore('previewStore', () => {
  let titlePreview = '';
  let descrPreview = '';

  
  return { titlePreview, descrPreview }
})