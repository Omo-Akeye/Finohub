import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAOS = () => {
  AOS.init({
    duration: 2000,
    delay: 100
    // Other AOS configuration options
  });
};
