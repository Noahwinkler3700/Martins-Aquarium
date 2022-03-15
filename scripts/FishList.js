/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module
import { getFish } from "./fishData.js";
import { Fish } from "./fish.js";


export const FishList = () => {

    // Get a reference to the `<section class="fishList">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = getFish()
    let fishHTMLRepresentation = ""
    for (const oneThingFromTheSea of fishes){
                fishHTMLRepresentation += Fish(oneThingFromTheSea);
                console.log(oneThingFromTheSea)
    }
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}