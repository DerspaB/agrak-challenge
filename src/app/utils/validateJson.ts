export const validateProperties = (obj: any) => {
    let isInvalid = false
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
                isInvalid = true
            }
        }
    }
    return isInvalid
};