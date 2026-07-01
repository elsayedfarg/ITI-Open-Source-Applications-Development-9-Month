// import React from 'react'
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const App = () => {
  const [firstName, setName] = useState("Sayed");
  const [count, setCount] = useState(0);
  const [enteredName, setEnteredName] = useState("");

  return (
    <>
      <Field>
        <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
        <Input
          id="input-field-username"
          type="text"
          placeholder="Enter your username"
          onChange={(e) => {
            setEnteredName(e.target.value);
          }}
        />
        <FieldDescription>
          Choose a unique username for your account.
        </FieldDescription>
      </Field>
      <br />
      <br />
      <p>{firstName}</p>
      <Button
        onClick={() => {
          setName("Mohamed");
          console.log(firstName);
        }}
      >
        Button
      </Button>
      <Button
        onClick={() => {
          setCount((count) => count + 1);
          setCount((count) => count + 1);
          setCount((count) => count + 1);
        }}
      >
        Count:{count}
      </Button>
    </>
  );
};

export default App;
