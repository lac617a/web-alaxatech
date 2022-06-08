import {useNavigate} from "react-router-dom";

export default function useNavigationToTop() {
  const navigate = useNavigate();

  const navigateAndReset = to => {
    navigate(to, {replace: true});
    window.scrollTo(0, 0);
  };

  return navigateAndReset;
}