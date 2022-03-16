const locationOne = {
    country: "Fish Tanks around the country.",
    blurb: "Can usually be found hanging out with dory.",
    image: "yellow-tang-home.webp"
}

const locationTwo = {
    country: "Deep blue sea.",
    blurb: '"Fish are friends not food- Bruce"',
    image: "beach-pic.jpg"
}

const locationThree = {
    country: "Every local restaraunt fish tank.",
    blurb: "Commonly found hanging out with flounders at Seaworld.",
    image: "puffer-home.jpg"
}

const locationList = [locationOne, locationTwo, locationThree]

export const getLocations = () => {
    return locationList;
}

console.log()