export function markupData(dataId) {
    // const params1 = {...[...dataId]};
    const objDate = dataId[0];
    const searchQuery = objDate.breeds[0]
  
    return `
      <div class="img-container">
        <img src="${objDate.url}" alt="${searchQuery.name}">
      </div>
      <div class="text-container">
        <h2>${searchQuery.name}</h2>
          <p>${searchQuery.description}</p>
        <h3>Temperament:
          <span>${searchQuery.temperament}</span>
        </h3>
    </div>`;
    // refs.divMarkup.innerHTML = markup;
  }