<?php
namespace App;

class Factorial
{
    public function factorial($n): ?int
    {
        if (!is_int($n)) {
            return null;
        }

        if ($n < 0) {
            return null;
        }

        if ($n === 0 || $n === 1) {
            return 1;
        }

        $result = 1;

        for ($i = 2; $i <= $n; $i++) {
            $result *= $i;
        }

        return $result;
    }
}