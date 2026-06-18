<?php

use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\Attributes\CoversClass;
use App\ShoppingCart;

#[CoversClass(ShoppingCart::class)]
class ShoppingCartTest extends TestCase
{
    private ShoppingCart $cart;

    protected function setUp(): void
    {
        $this->cart = new ShoppingCart();
    }

    public function testCanAddNewItem(): void
    {
        $this->cart->addItem('Laptop', 1000.0, 1);
        $items = $this->cart->getItems();

        $this->assertArrayHasKey('Laptop', $items);
        $this->assertEquals(1, $items['Laptop']['quantity']);
    }

    public function testAddingExistingItemIncrementsQuantity(): void
    {
        $this->cart->addItem('Apple', 0.5, 2);
        $this->cart->addItem('Apple', 0.5, 3);
        $items = $this->cart->getItems();

        $this->assertEquals(5, $items['Apple']['quantity']);
    }

    public function testCanRemovePartialQuantity(): void
    {
        $this->cart->addItem('Banana', 0.3, 5);
        $this->cart->removeItem('Banana', 2);
        $items = $this->cart->getItems();

        $this->assertEquals(3, $items['Banana']['quantity']);
    }

    public function testRemovingFullQuantityDeletesItem(): void
    {
        $this->cart->addItem('Book', 15.0, 2);
        $this->cart->removeItem('Book', 2);
        $items = $this->cart->getItems();

        $this->assertArrayNotHasKey('Book', $items);
    }

    // --- Testing Total Calculations ---

    public function testTotalPriceOfEmptyCartIsZero(): void
    {
        $this->assertEquals(0.0, $this->cart->getTotalPrice());
    }

    public function testCalculatesTotalPriceForMultipleItems(): void
    {
        $this->cart->addItem('Shirt', 20.0, 2); // 40.0
        $this->cart->addItem('Shoes', 50.0, 1); // 50.0

        $this->assertEquals(90.0, $this->cart->getTotalPrice());
    }

    // --- Testing Edge Cases & Exceptions ---

    public function testAddItemWithNegativePriceThrowsException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->cart->addItem('InvalidItem', -5.0, 1);
    }

    public function testAddItemWithZeroQuantityThrowsException(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->cart->addItem('InvalidItem', 10.0, 0);
    }

    public function testRemoveNonExistentItemThrowsException(): void
    {
        $this->expectException(OutOfBoundsException::class);
        $this->cart->removeItem('GhostItem', 1);
    }

    public function testRemoveNegativeQuantityThrowsException(): void
    {
        $this->cart->addItem('Pen', 1.0, 2);

        $this->expectException(InvalidArgumentException::class);
        $this->cart->removeItem('Pen', -1);
    }
}