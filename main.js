let prevContainer = document.querySelector(".technology-preview");
let prevBox = prevContainer.querySelectorAll(".preview");

document
   .querySelectorAll(".technologies-container .technology")
   .forEach((technology) => {
      technology.onclick = () => {
         prevContainer.style.display = "flex";
         let name = technology.getAttribute("data-name");

         prevBox.forEach((preview) => {
            let target = preview.getAttribute("data-target");

            if (name == target) {
               preview.classList.add("active");
            }
         });
      };
   });

prevBox.forEach((closeBtn) => {
   closeBtn.querySelector(".fa-times").onclick = () => {
      closeBtn.classList.remove("active");
      prevContainer.style.display = "none";
   };
});
