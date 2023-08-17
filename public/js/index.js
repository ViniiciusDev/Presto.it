/* INIZIO FETCH */

async function downloadcategories(url) {
    let response = await fetch(url);
    let objsserver = await response.json();
    objsserver.forEach(element => {
        createDom(element); 
    });
    return objsserver;
}

downloadcategories("../../server/api/categorie.json");

/* fINE FETCH */

let categoryContainer = document.getElementById("categoryContainer");

function createDom(elements) {
    console.log(elements);

    let cardContainer = document.createElement("div");
    cardContainer.classList.add("col-12", "col-md-6", "col-lg-4", "col-xl-3");
    categoryContainer.appendChild(cardContainer);

    let cardCategory = document.createElement("div");
    cardCategory.classList.add("category-card");
    cardContainer.appendChild(cardCategory);

    let cardBody = document.createElement("div");
    cardBody.classList.add("category-body");
    cardCategory.appendChild(cardBody);

    let roundedIconContainer = document.createElement("div");
    roundedIconContainer.classList.add("rounded-icon-container");
    cardBody.appendChild(roundedIconContainer);

    let iconItem = document.createElement("i");
    iconItem.classList.add(elements.icon, elements.icon2);
    roundedIconContainer.appendChild(iconItem);

    let announceTitle = document.createElement("h3");
    announceTitle.textContent = elements.name;
    cardBody.appendChild(announceTitle);

    let announceText = document.createElement("p");
    announceText.classList.add(elements.announcementsCount);
    cardBody.appendChild(announceText);
}











/* 
<div class="col-12 col-md-6 col-lg-4 col-xl-3">
          <div class="category-card">
            <div class="category-body">
              <div class="rounded-icon-container">
                <i class="bi bi-airplane"></i>
              </div>
             <h3>Auto</h3>
             <p>Annunci</p>
            </div>
          </div>
</div> */