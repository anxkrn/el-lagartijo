import { useInViewport } from '../hooks/useInViewport';
import '../styles/SectionReveal.css';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
}

const SectionReveal = ({ children, className = '' }: SectionRevealProps) => {
  const { ref, isInView } = useInViewport<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`section-reveal ${isInView ? 'section-reveal--visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default SectionReveal;
