export const locationWriter = (locationObj) => {
    return `<article class="locationObj">
        <div><img class+"location-image" src="images/${locationObj.image}" /></div>
        <div class="locationInfo">
    <h3 class="country-name">${location.Obj.country}</h3>
    <p>${locationObj.blurb}</p>
    </div>
    </article>`
}