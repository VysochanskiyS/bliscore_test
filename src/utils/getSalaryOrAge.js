
//shop
export const getSalaryForShop = (data)=>{

    return data.children.map((city)=>city.children.map((shop)=>shop.children.reduce((ac, el) => ac + el.salary, 0)))
}

export const getAverageAgeShop = (data)=>{

    return data.children.map((city)=>city.children.map((shop)=>(shop.children.reduce((ac, el) => ac + el.age, 0)/shop.children.length)))
}

 //city
export const getSalaryForCity = (data)=>{

    return getSalaryForShop(data).map((it)=>it.reduce((ac, el) => ac + el, 0))
}

export const getAverageForCity = (data)=>{

    return getAverageAgeShop(data).map(it=>(it.reduce((ac, el) => ac + el, 0)/it.length))
}


