import { getFish } from './fishData.js';
import { FishList } from './FishList.js';
import { tipList } from '../tips/tipList.js';
import { locationLister } from '../locations/LocationList.js'
const allTheFish = getFish()

for (const fish of allTheFish) {
    console.log(fish)
}
FishList()
tipList()
locationLister()