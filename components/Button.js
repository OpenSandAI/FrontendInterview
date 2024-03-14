const Button = ({ children }) => {
  return (
    <button className="login-button px-4 py-1 bg-blue-500 rounded text-white">
      {children}
    </button>
  );
};

export default Button
