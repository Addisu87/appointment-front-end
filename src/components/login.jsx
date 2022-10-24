import React from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

function Login() {
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
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Login;
