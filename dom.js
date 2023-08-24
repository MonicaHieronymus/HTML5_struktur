const overskrift = document.querySelector("#overskrift");
console.log(overskrift);

const undertitel = document.querySelector("#undertitel");
console.log(undertitel);

const article = document.querySelector("article:last-child");
console.log(article);

const article1 = document.querySelector("article:first-child");
console.log(article1);

const p = document.querySelector("p:last-child");
console.log(p);

const overskrift2 = document.querySelector("#overskrift");
console.log(overskrift2);
overskrift2.textContent = "Artikler";

const underoverskrift1 = document.querySelector("#underoverskrift1");
console.log(underoverskrift1);
underoverskrift1.textContent = "City";

const underoverskrift2 = document.querySelector("#underoverskrift2");
console.log(underoverskrift2);
underoverskrift2.textContent = "Cherry Blossom";

const img1 = document.querySelector("#img1");
console.log(img1);
img1.src =
  "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI";
img1.alt = "Accessories";

const img2 = document.querySelector("#img2");
console.log(img2);
img2.src =
  "https://fastly.picsum.photos/id/39/3456/2304.jpg?hmac=cc_VPxzydwTUbGEtpsDeo2NxCkeYQrhTLqw4TFo-dIg";
img2.alt = "Pladespiller";
