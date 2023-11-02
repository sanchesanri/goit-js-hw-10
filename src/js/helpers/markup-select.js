export function markupSelect (obj) {
    const markup = obj.map(({id,name})=>{
        return `<option value="${id}">${name}</option>`
    });

    const firstOption = '<option value="default" selected>--Make your choice--</option>';

    markup.unshift(firstOption);
    markup.join('');

    return markup
};
