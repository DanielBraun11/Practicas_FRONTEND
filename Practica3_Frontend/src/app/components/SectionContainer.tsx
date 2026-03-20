interface SectionContainerProps {
    title?: string;
    children: React.ReactNode;
  }
  
  const SectionContainer = ({ title, children }: SectionContainerProps) => {
    return (
      <section className="section-container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </section>
    );
  };
  
  export default SectionContainer;