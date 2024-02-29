import "./TextField.css";
import Search from '../../assets/icons/search.svg'

interface TextFieldProps {
    icon?: string;
    placeholder?: string;
  }
  

const TextField: React.FC<TextFieldProps> = ({ icon, placeholder }) => {
  return (
    <div
      className="textfield-container bg-light"
    >
      <img src={Search} alt="search" />
      <input placeholder={placeholder} />
    </div>
  );
};

export default TextField;
