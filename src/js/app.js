export default function orderByProps(obj, filter) {
    const arrayFiltred = [];

    if (filter) {
        filter.forEach((item) => {
            arrayFiltred.push({
                key: item,
                value: obj[item],
            });

            const deletedItem = item;
            delete obj[deletedItem];
        });
    }

    const arrayNotFiltred = [];

    for (const item in obj) {
        arrayNotFiltred.push({
            key: item,
            value: obj[item],
        });
    }

    arrayNotFiltred.sort((a, b) => {
        if (a.key < b.key) return -1;
        if (a.key > b.key) return 1;
    });

    const arrayFinal = arrayFiltred.concat(arrayNotFiltred);
    return arrayFinal;
}
