import './style.css';
import './app.css';
import {tags} from 'ziko/ui'
import {useState} from 'ziko/hooks'
// import logo from './assets/images/logo-universal.png';
import ziko_logo from './assets/images/ziko.png';
import {Greet} from '../wailsjs/go/main/App';

const {div, img, input, button} = tags;

export default function App(){
    const Input = input({class : 'input', id : 'name', autocomplete: 'off'});
    const [result, setResult] = useState('Please enter your name below 👇')
    return div(
        img({src : ziko_logo}),
        div({class : 'result'}, result),
        div(
            {class : 'input-box'},
            Input,
            button({class : 'btn'}, 'Greet').onClick(async (e)=>{
                const value = Input.element.value;
                const res = await Greet(value)
                setResult(res)
                console.log(res)
            })
        )
    ).style({display : 'contents'})
}

App().mount(document.querySelector('#app'))
