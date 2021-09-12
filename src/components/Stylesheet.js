import './myStyles.css';

const Stylesheet = props => {
  let className = props.primary ? 'primary' : undefined;

  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  );
};

export default Stylesheet;
