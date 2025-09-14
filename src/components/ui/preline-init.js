'use client';

import { useEffect } from 'react';

export default function PrelineScript() {
  useEffect(() => {
    // Initialize Preline UI components
    import('preline').then((HSStaticMethods) => {
      if (typeof HSStaticMethods.initComponents === 'function') {
        HSStaticMethods.initComponents();
      }
    });
  }, []);

  return null;
}