const data = {
    fruits: {
      tropical: ["banana", "pineapple", "mango"],
      citrus: ["orange", "lemon", "lime"],
    },
    vegetables: {
      leafy: ["spinach", "lettuce", "kale"],
      root: ["carrot", "potato", "beet"],
    },
  };
  const searchInput = document.getElementById("searchInput");
  const searchResultsList = document.getElementById("searchResults");
  
  searchInput.addEventListener("input", handleSearch);
  
  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const results = searchKeys(data, searchTerm);
  
    renderSearchResults(results);
  }
  
  function searchKeys(obj, term) {
    const results = [];
  
    for (const key in obj) {
      if (key.toLowerCase().includes(term)) {
        results.push(key);
      }
  
      if (typeof obj[key] === "object") {
        results.push(...searchKeys(obj[key], term));
      }
    }
  
    return results;
  }
  
  function renderSearchResults(results) {
    searchResultsList.innerHTML = "";
  
    results.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = result;
      searchResultsList.appendChild(li);
    });
  }
    