
const formatData = (data) => {
    const convertedData = [];

    for (const key in data) {
        const newConversion = {
            "item_id": key,
            "title": data[key][0].title,
            "author": data[key][0].author,
            "category": data[key][0].category,
            "loading": false,
        }

        convertedData.push(newConversion);
    }

    return convertedData;
}

export default formatData;


