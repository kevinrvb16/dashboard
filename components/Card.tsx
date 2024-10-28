interface CardProps {
    title: string;
    value: string;
  }
  
  const Card = ({ title, value }: CardProps) => (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
  
  export default Card;
  