import { useState } from "react";
import ProgerssBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/jpeg", "image/png"];

  const changeHandler = (event) => {
    let selected = event.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select files of type image(jpeg, png)!");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      {error && <div className="error">{error}</div>}
      {file && <div>{file.name}</div>}
      {file && <ProgerssBar file={file} setFile={setFile} />}
    </form>
  );
};

export default UploadForm;
