<?php

namespace App;

class User
{
    private string $name;
    private string $email;

    public function __construct(string $name, string $email)
    {
        $this->name = $name;
        $this->email = $email;
    }

    public function name(?string $newName = null): string
    {
        if ($newName !== null) {
            $this->name = $newName;
        }
        return $this->name;
    }

    public function email(?string $newEmail = null): string
    {
        if ($newEmail !== null) {
            $this->email = $newEmail;
        }
        return $this->email;
    }
}