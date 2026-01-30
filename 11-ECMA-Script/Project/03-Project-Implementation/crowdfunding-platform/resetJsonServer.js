async function emptyCollection(collection) {
  const url = `http://localhost:5000/${collection}`;

  const res = await fetch(url);
  const items = await res.json();

  await Promise.all(
    items.map((item) => fetch(`${url}/${item.id}`, { method: "DELETE" })),
  );

  console.log(`${collection} cleared`);
}

async function resetDatabase() {
  try {
    await emptyCollection("pledges");
    await emptyCollection("campaigns");
    await emptyCollection("users");

    console.log("Database reset successfully ✅");
  } catch (err) {
    console.error("Reset failed ❌", err);
  }
}

resetDatabase();
