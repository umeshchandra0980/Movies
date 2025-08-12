// SplashScreen.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import './splash.css'
export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // Adjust based on your route
    }, 3000); // 3 seconds (length of your GIF)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-container">
      <img
        src="https://user-images.githubusercontent.com/99184393/211183762-03b6e9b4-9fcd-4874-a0e4-20cf00537c06.gif"
        alt="Welcome"
        className="splash-image"
      />
    </div>
  );
}
