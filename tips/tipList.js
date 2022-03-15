import {getTips} from "./tipData.js"
import { bigTip } from "./tip.js"

export const tipList = () => {

    
    const contentElement = document.querySelector(".tipList")
    
    const tips = getTips()
   
	let tipHTMLRepresentation = "";
   
	for (const item of tips) {
		tipHTMLRepresentation += bigTip(item);
	}
   
    contentElement.innerHTML += `
        ${tipHTMLRepresentation}
    `
}