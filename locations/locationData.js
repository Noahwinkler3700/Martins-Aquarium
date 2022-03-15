const locationOne = {
    country: "Honolulu, HI",
    blurb: "The Hawaiian islands are a tropical paradise brimming with fish",
    image: "hawaii.jpg"
}

const locationTwo = {
    country: "Cape Cod, MA",
    blurb: "Scene of rather exciting shark sightings along the coast.",
    image: "capecod.jpg"
}

const locationThree = {
    country: "Fiji",
    blurb: "Stunning south Pacific island with an incredibly diverse eco-system.",
    image: "fiji.jpg"
}

const locationList = [locationOne, locationTwo, locationThree]

export const getLocations = () => {
    return locationList;
}

console.log()