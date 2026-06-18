<?php

namespace App;

use InvalidArgumentException;
use OutOfBoundsException;

class ShoppingCart
{
    private array $items = [];

    public function addItem(string $name, float $price, int $quantity = 1): void
    {
        if ($price < 0 || $quantity <= 0) {
            throw new InvalidArgumentException("Price must be non-negative and quantity must be greater than 0.");
        }

        if (isset($this->items[$name])) {
            $this->items[$name]['quantity'] += $quantity;
        } else {
            $this->items[$name] = [
                'price' => $price,
                'quantity' => $quantity
            ];
        }
    }

    public function removeItem(string $name, int $quantity = 1): void
    {
        if (!isset($this->items[$name])) {
            throw new OutOfBoundsException("Item '{$name}' is not in the cart.");
        }

        if ($quantity <= 0) {
            throw new InvalidArgumentException("Quantity to remove must be greater than 0.");
        }

        if ($quantity >= $this->items[$name]['quantity']) {
            unset($this->items[$name]);
        } else {
            $this->items[$name]['quantity'] -= $quantity;
        }
    }

    public function getTotalPrice(): float
    {
        $total = 0.0;
        foreach ($this->items as $item) {
            $total += $item['price'] * $item['quantity'];
        }
        return $total;
    }

    public function getItems(): array
    {
        return $this->items;
    }

    public function clear(): void
    {
        $this->items = [];
    }
}