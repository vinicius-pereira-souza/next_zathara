import { Input, ButtonSubmit, ButtonGoogleSign } from "./form-controls";
import { SeparatorForm } from "./separators";

export function LoginForm() {
  return (
    <>
      <form className="text-left">
        <Input
          type="email"
          name="email"
          textLabel="E-mail"
          placeholder="example@example.com"
        />
        <Input
          type="password"
          name="password"
          textLabel="Passoword"
          placeholder="Enter Your Passord"
        />
        <ButtonSubmit text="Login" />
        <SeparatorForm />
        <ButtonGoogleSign />
      </form>
    </>
  );
}

export function RegisterForm() {
  return (
    <>
      <form className="text-left">
        <Input
          type="email"
          name="email"
          textLabel="E-mail"
          placeholder="example@example.com"
        />
        <Input
          type="password"
          name="password"
          textLabel="Passoword"
          placeholder="Enter Your Passord"
        />
        <Input
          type="password"
          name="confirmPassword"
          textLabel="confirm Passoword"
          placeholder="Confirm Your Passord"
        />
        <ButtonSubmit text="Register" />
        <SeparatorForm />
        <ButtonGoogleSign />
      </form>
    </>
  );
}
