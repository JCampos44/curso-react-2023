import imgUno from './assets/images/img1.jpg'
import ButtonState from './components/ButtonState'
import MyButton from './components/MyButton'
import WelcomeText from './components/WelcomeText'
import ListFruts from './components/fruts/ListFruts'

const App = () => {

    const title = 'Mi título desde una constante'
    const classTitle = 'text-center'
    // const pathImg = imgUno
    const user = true

    return (
        <>

            <ButtonState />

            <h1 className={classTitle}>{title}</h1>
            <img src={imgUno} alt={`imagen-${title}`} />

            <MyButton text='botón 1' />
            <MyButton text='botón 2' />
            <MyButton text='botón 3' />

            <WelcomeText user={user} />

            <ListFruts />
        </>
    )
}

export default App