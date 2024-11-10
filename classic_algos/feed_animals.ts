/**
 * Накормить животных. На вход два массива: 1 с количеством порций внутри одного завоза, 2 - количество порций для животного i
 */

function feedAnimals(food: number[], animals: number[]) {
    if (!food.length || !animals.length) {
        return 0
    }
    let count = 0
    const sortedFood = food.sort()
    const sortedAnimals = animals.sort()
    for (const foodItem of sortedFood) {
        if(sortedAnimals.length > count) {
            if (foodItem >= sortedAnimals[count]) {
                count += 1
            }
            if (count === sortedAnimals.length) {
                break
            }
        }
       
    }
    return count
}

console.log(feedAnimals([1, 4, 3, 8], [8, 2, 3, 2]))