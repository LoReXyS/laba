import useScrollReveal from './useScrollReveal';

export default function ScrollReveal({ children }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div ref={ref} className={`scrollReveal ${visible ? 'show' : ''}`}>
      {children}
    </div>
  );
}
