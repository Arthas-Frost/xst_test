
export function sortNumber(data) {
    for(let i = 0; i < data.length; i++){
        data[i].orderNumber=i+1;
    }
    return data;
  }



