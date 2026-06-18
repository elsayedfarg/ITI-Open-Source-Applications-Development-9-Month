<?php

use PHPUnit\Framework\TestCase;
use App\User;

class UserTest extends TestCase
{
    private User $user;

    protected function setUp(): void
    {
        $this->user = new User('Sayed Mohamed', 'sayed@example.com');
    }

    public function testCanRetrieveInitialName(): void
    {
        $this->assertEquals('Sayed Mohamed', $this->user->name());
    }

    public function testCanChangeUserName(): void
    {
        $this->user->name('Ali');
        $this->assertEquals('Ali', $this->user->name());
    }

    public function testCanRetrieveInitialEmail(): void
    {
        $this->assertEquals('sayed@example.com', $this->user->email());
    }

    public function testCanChangeUserEmail(): void
    {
        $this->user->email('sayed@iti.gov.eg');
        $this->assertEquals('sayed@iti.gov.eg', $this->user->email());
    }
}