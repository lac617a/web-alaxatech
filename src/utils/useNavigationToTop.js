import {useNavigate} from "react-router-dom";

export default function useNavigationToTop() {
  const navigate = useNavigate();

  const navigateAndReset = (to, node) => {
    navigate(to, {replace: true});
    node.scrollIntoView()
  };

  return navigateAndReset;
}