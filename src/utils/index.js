export const scrollToTop = (e) => {
    !e?.ctrlKey && window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  export const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ block: "start", behavior: "smooth" })
  };
  