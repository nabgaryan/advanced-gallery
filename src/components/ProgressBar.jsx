import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgerssBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progressbar" style={{ width: progress + "%" }}></div>;
};

export default ProgerssBar;
