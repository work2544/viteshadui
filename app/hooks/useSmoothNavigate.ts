import { useNavigate } from 'react-router';
import { useCallback } from 'react';

export default function useSmoothNavigate() {
  const navigate = useNavigate();
  
  const smoothNavigate = useCallback((path: string, options = {}) => {
    // First navigate to the path
    navigate(path, options);
    
    // Extract the hash from the path
    const hash = path.includes('#') ? path.split('#')[1] : null;
    console.log(hash);
    if (hash) {
      // Wait for the navigation to complete
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          // Smooth scroll to the element
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [navigate]);
  
  return smoothNavigate;
}