import { useState } from "react";

function SubmitRecipie() {
  const [formInput, setFormInput] = useState(null);
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Recipie Description:
        <textarea>Hello there, this is some text in a text area</textarea>
      </label>
      <br />

      <select>
        <option value="NorthIndian">NorthIndian</option>
        <option value="SouthIndian">SouthIndia</option>
        <option selected value="Korean">
          Korean
        </option>
        <option value="Chinese">Chinese</option>
      </select>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SubmitRecipie;
