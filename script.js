    // Список курсов
    let courses = [
        { name: "Courses in England", prices: [0, 100] }, 
        { name: "Courses in Germany", prices: [500, null] }, 
        { name: "Courses in Italy", prices: [100, 200] }, 
        { name: "Courses in Russia", prices: [null, 400] },
        { name: "Courses in China", prices: [50, 250] },
        { name: "Courses in USA", prices: [200, null] },
        { name: "Courses in Kazakhstan", prices: [56, 324] },
        { name: "Courses in France", prices: [null, null] },
    ];
  
    // Варианты цен (фильтры), которые ищет пользователь
    let requiredRange1 = [null, 200];
    let requiredRange2 = [100, 350];
    let requiredRange3 = [200, null];
  
  
    function filterP(range,courses) {
    let max;
    let min;
    range[0] === null ? min = 0 : min = range[0]     // Избавляюсь от null, заменяя его либо 0, либо большим числом, выхощим из диапазона цен
    range[1] === null ? max = 1000 : max = range[1]  // Избавляюсь от null, заменяя его либо 0, либо большим числом, выхощим из диапазона цен
  
    result = []                               
    // Создаю копию массива с курсами, чтобы избавиться от null
    let coursesCopy = courses.map(item => {
        
      newRange = []
      item.prices[0] === null ? newRange[0] = 0 : newRange[0] = item.prices[0]
      item.prices[1] === null ? newRange[1] = 1000 : newRange[1] = item.prices[1]
      copyItem = {...item}
      copyItem.prices = newRange

      return copyItem
    })
   
    // Сортировка курсов
    coursesCopy.forEach( (item,index) => {
      if(item.prices[0] <= min && item.prices[1] >= max) {
        result.push(courses[index])
        return;
      }
      if(item.prices[0] >= min && item.prices[1] <= max) {
        result.push(courses[index])
        return;
      }
      if((item.prices[0] >= min && item.prices[0] <= max) || (item.prices[1] <= max && item.prices[1] >= min)) {
        result.push(courses[index])
        return;
      }
  
    })
  
    // Сортировка итоговых курсов по начальному значению диапазона цен, знаю, что можно лучше)
    result.sort((a,b) => {return a.prices[0] - b.prices[0]})
   
    return result
  }