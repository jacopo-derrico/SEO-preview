import { Title } from '#build/components';
import { defineStore } from 'pinia'

export const usePreviewStore = defineStore('previewStore', () => {
  let titlePreview = '';
  let descrPreview = '';
  let isTitleCopied = false;
  let isDescrCopied = false;
  let isEmbedCopied = false;
  
  return { titlePreview, descrPreview }
})