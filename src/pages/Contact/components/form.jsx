import './font.css'; 
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    showAlert("Form submitted successfully.");
  };

  const checkForErrors = (errors) => {
    errors.email && showAlert("Email address is required and must be a valid.");
    errors.name && showAlert("Name is required.");
    errors.number &&
      showAlert("Mobile Number is required and must be of 10 digits.");
    errors.message && showAlert("Your message must be less than 500 words.");
  };

  const showAlert = (message) => {
    alert(message);
  };

  return (
    <div className="backdrop-blur-md grid-cols-1 justify-center items-center bg-gray-800/40 p-8 gap-8 w-[26.25rem] h-[38.875rem] rounded-2xl bg-blend-darken">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="items-start	p-0 gap-2 w-96 h-64">
          <div className="flex flex-col items-start	p-0 gap-2 w-96 h-16">
            <label className=" w-11 h-6 font-sans font-normal text-base text-gray-100">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="rounded-md w-80"
              placeholder="  Enter your email."
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />{" "}
          </div>
          <div className="flex flex-col items-start	p-0 gap-2 w-96 h-16">
            <label className=" w-11 h-6 font-sans font-normal text-base text-gray-100">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="rounded-md w-80"
              placeholder="  Enter your name."
              {...register("name", {
                required: true,
                pattern: /^[A-Za-z\s]{1,50}$/,
              })}
            />
          </div>
          <div className="flex flex-col items-start	p-0 gap-2 w-96 h-16">
            <label className="h-6 font-sans font-normal text-base text-gray-100">
              Mobile Number
            </label>
            <input
              type="text"
              name="number"
              className="rounded-md w-80"
              placeholder="  Enter your mobile number."
              {...register("number", { required: true, pattern: /^\d{10}$/ })}
            />
          </div>
          <div class="flex">
            <div className="flex flex-col items-start p-0 gap-2 h-64">
              <label className=" w-11 h-6 font-sans font-normal text-base text-gray-100">
                Message
              </label>
              <input
                type="text"
                name="message"
                className="rounded-md w-80 h-60"
                placeholder="  Enter your message."
                rows="5"
                {...register("message", {
                  required: "This field is required.",
                  validate: (value) =>
                    value.split(" ").length < 500 ||
                    "Your message must be less than 500 words.",
                })}
              />
            </div>
          </div>
          <div class="flex py-5">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => checkForErrors(errors)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
