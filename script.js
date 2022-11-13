function generateRandomNumber(num){
    return Math.floor(Math.random()*num)
}

const strings={
    countryName:['USA','China','Germany','France','Japan','England'],
    cuisineName:['Italian','French','Japanese','Chinese',],
    teamName:['Real Madrid','Barcelona','Manchester United','Chelsea',],
}

let personalChoices=[];

for(let item in strings){
    let optionIdx= generateRandomNumber(strings[item].length)

    switch (item){
        case 'countryName':
            personalChoices.push(`I want to visit ${strings[item][optionIdx]}.`)
            break
        case 'cuisineName':
            personalChoices.push(`I love ${strings[item][optionIdx]} cuisine.`)
            break
        case 'teamName':
            personalChoices.push(`I am a supporter of ${strings[item][optionIdx]}.`)
            break
        default:
            personalChoices.push('There is not enough info.')
    }
}

function formatChoices(choice){
   const formatted=personalChoices.join('\n')
    console.log(formatted) 
}

formatChoices(personalChoices);
