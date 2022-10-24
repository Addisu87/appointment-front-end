import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';

function SignUp() {
  return (
    <div className="container">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name1" value="Your name" />
          </div>
          <TextInput id="name1" type="text" placeholder="name" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree">
            I agree with the{' '}
            <a
              href="/forms"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
      </form>
    </div>
  );
}

export default SignUp;
