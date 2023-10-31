export function markupSelect (obj) {
    return markup = obj.map(({id,name})=>{
        return `<option value="${id}">${name}</option>`
    }).join('');
};
