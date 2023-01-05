import "./App.css";
import useForm from "./pages/Form2/useForm";

function App() {
  //Final submit function
  const formLogin = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  };

  //Custom hook call
  const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

  return (
    <div className="container">
      <div>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        {errors.email && <h3>{errors.email}</h3>}
        <input
          minLength="8"
          // type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        {errors.password && <h3>{errors.password}</h3>}
        <input
          type="text"
          minLength="5"
          required
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        {errors.username && <h3>{errors.username}</h3>}
        <button onClick={handleSubmit} value="Submit" className="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
