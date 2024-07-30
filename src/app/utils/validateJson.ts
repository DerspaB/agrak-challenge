export const validateProperties = (obj: any) => {
    let isInvalid = false
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
                console.log(`Property "${key}" is empty or invalid.`);
                isInvalid = true
            } else {
                console.log(`Property "${key}" is valid: ${obj[key]}`);
            }
        }
    }
    return isInvalid
};