 let days=['월','화','수']

 /*for(let index=0;index<days.length;index++)
 {
     console.log(days[index])     
 }*/

 /*for(let day of days)
 {
     console.log(day)
 }*/

 days.push('목')
 days.unshift('일')

 for (let index=0;index<days.length;index++)
 {
     console.log(days[index])
 }
 for(let day of days)
 {
     console.log(day)
 }