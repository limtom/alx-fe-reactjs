import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setformData((prev) => ({ ...prev, [name]: value }));
  // }

  function handleSubmit(e) {
    if (!username || !email || password) {
      setError(true);
    }

    if (error) return;

    e.preventDefault();
    console.log({ username, email, password });
  }

  return (
    <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
      <h2 className="text-center text-3xl text-orange-500 mb-5">
        Registration Form
      </h2>
      <div className="flex flex-col gap-1 mb-3">
        <label htmlFor="username" className="">
          Username
        </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <label htmlFor="email" className="">
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="Input email"
          className="w-full"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <label htmlFor="password" className="">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Input password"
          className="w-full"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input
        type="submit"
        value="Submit"
        className="py-2 px-4 border-0 rounded-lg bg-orange-400 text-white justify-self-center"
      />
    </form>
  );
}

export default RegistrationForm;
