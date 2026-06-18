<?php

namespace Tests;

use PHPUnit\Framework\TestCase;
use App\Factorial;

class FactorialTest extends TestCase
{
    public function testZero()
    {
        $fac = new Factorial();
        $this->assertEquals(1, $fac->factorial(0));
    }

    public function testOne()
    {
        $fac = new Factorial();
        $this->assertEquals(1, $fac->factorial(1));
    }

    public function testFive()
    {
        $fac = new Factorial();
        $this->assertEquals(120, $fac->factorial(5));
    }

    public function testInvalidInput()
    {
        $fac = new Factorial();

        $this->assertNull($fac->factorial(-3));
        $this->assertNull($fac->factorial(1.5));
        $this->assertNull($fac->factorial(false));
        $this->assertNull($fac->factorial('abc'));
    }
}