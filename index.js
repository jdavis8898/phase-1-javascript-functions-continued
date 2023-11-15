function saturdayFun(activity = "roller-skate")
{
    const response = `This Saturday, I want to ${activity}!`

    return response
}

const mondayWork = function (activity = "go to the office")
{
    const response = `This Monday, I will ${activity}.`

    return response
}

function wrapAdjective(flair = "*")
{
    return function (value = "special")
    {
        const response = `You are ${flair}${value}${flair}!`

        return response
    }
}