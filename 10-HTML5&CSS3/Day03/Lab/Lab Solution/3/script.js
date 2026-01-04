window.addEventListener("load", function () {
  const leftSection = document.getElementById("left");
  const images = document.querySelectorAll("#right img");

  images.forEach((img) => {
    img.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("myImg", e.target.src);
      e.dataTransfer.setData("parentId", e.target.parentElement.id);
    });

    img.addEventListener("dragend", function (e) {
      if (!e.target.moved) {
        // if not moved
        e.target.style.display = "inline-block";
      }
      e.target.moved = false;
    });
  });

  leftSection.addEventListener("dragover", (e) => e.preventDefault());
  leftSection.addEventListener("drop", (e) => {
    e.preventDefault();
    const src = e.dataTransfer.getData("myImg");
    const img = document.querySelector(`img[src="${src}"]`);
    leftSection.appendChild(img);
    img.style.display = "inline-block";
    img.moved = true;
  });

  document.body.addEventListener("dragover", (e) => e.preventDefault());
  document.body.addEventListener("drop", (e) => {
    e.preventDefault();
    // If dropped outside left section, return to original parent
    const src = e.dataTransfer.getData("myImg");
    const parentId = e.dataTransfer.getData("parentId");
    const img = document.querySelector(`img[src="${src}"]`);
    if (!leftSection.contains(img)) {
      document.getElementById(parentId).appendChild(img);
      img.style.display = "inline-block";
      img.moved = false;
    }
  });
});
