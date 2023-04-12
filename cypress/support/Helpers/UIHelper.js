class UIHelper {

 async verifyResolution(element, resolutionData, resolutionType, variable) {
    if(resolutionType=="width")
    {
        await element.invoke('css', 'width')
        .then(str => parseInt(str)).should('be.greaterThan',Number(resolutionData)-Number(variable))
        await element.invoke('css', 'width')
        .then(str => parseInt(str)).should('be.lessThan',Number(resolutionData)+Number(variable))
    }
    else{
        await element.invoke('css', 'height')
        .then(str => parseInt(str)).should('be.greaterThan',Number(resolutionData)-Number(variable))
        await element.invoke('css', 'height')
        .then(str => parseInt(str)).should('be.lessThan',Number(resolutionData)+Number(variable))
    }
}

}
export default new UIHelper();