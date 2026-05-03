const recommendations = [
  {
    category: "beach",
    title: "Maldives",
    description: "Crystal-clear water, overwater villas, and vibrant coral reefs.",
    imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "beach",
    title: "Bora Bora",
    description: "Turquoise lagoons and lush volcanic views in French Polynesia.",
    imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "temple",
    title: "Angkor Wat, Cambodia",
    description: "An iconic temple complex with rich Khmer history.",
    imageUrl: "https://images.unsplash.com/photo-1604542031658-5799ca5d7936?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "temple",
    title: "Fushimi Inari, Japan",
    description: "Famous red torii gates climbing scenic mountain trails.",
    imageUrl: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "country",
    country: "japan",
    title: "Tokyo, Japan",
    description: "A dynamic city blending futuristic energy and timeless tradition.",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "country",
    country: "japan",
    title: "Kyoto, Japan",
    description: "Historic shrines, traditional gardens, and geisha districts.",
    imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80"
  }
];

const input = document.getElementById("destinationInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const resultsContainer = document.getElementById("resultsContainer");

function createCard(item) {
  return `
    <article class="card">
      <img src="${item.imageUrl}" alt="${item.title}" />
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </article>
  `;
}

function render(items) {
  if (!items.length) {
    resultsContainer.innerHTML = "<p>No matching recommendations found.</p>";
    return;
  }
  resultsContainer.innerHTML = items.map(createCard).join("");
}

function handleSearch() {
  const query = input.value.trim().toLowerCase();
  if (!query) {
    render(recommendations.slice(0, 2));
    return;
  }

  const filtered = recommendations.filter((item) => {
    const categoryMatch = item.category.includes(query);
    const countryMatch = item.country ? item.country.includes(query) : false;
    const titleMatch = item.title.toLowerCase().includes(query);
    return categoryMatch || countryMatch || titleMatch;
  });

  render(filtered);
}

searchBtn.addEventListener("click", handleSearch);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") handleSearch();
});
clearBtn.addEventListener("click", () => {
  input.value = "";
  render(recommendations.slice(0, 2));
});

render(recommendations.slice(0, 2));