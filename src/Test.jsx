import Button from "./Button"
import Card from "./Card"

function Test(props) {
    const data = {
        name : "Yubraj", 
        age : 21 
    }

    return(
        <>
          <Button huhu="Register" />
          <Button huhu="Login" />
          <Button huhu="Logout" />
        </>
    )
}

export default Test