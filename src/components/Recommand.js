


function Recommendation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 9 && currentMonth <=12

    if (!isSpring) {
        return (<div>Ce n'est pas l'automne, le site est fermé</div>)   
    }

    return (
    <div>
        C'est l'automne, rempotez ! 🍁
    </div>)
}

export default Recommendation;