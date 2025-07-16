import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup function to remove smooth scrolling when component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Get the header height to account for the sticky header
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;
    
    // Calculate the target scroll position
    const elementPosition = element.offsetTop;
    const targetPosition = elementPosition - headerHeight - 20; // 20px additional offset for better visibility
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}; 