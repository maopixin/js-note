## react-router-dom

```javascript
//首先从react-router-dom中引入 BrowserRouter 和Route
import {
    BrowserRouter,
    Route，
    Link
} from 'react-router-dom';


class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){

        return (
            <ul>
                //link编译后是一个a标签
                <li><Link to="/">首页</Link></li>
                <li><Link to="/drama">剧集</Link></li>
                <li><Link to="/movie">视频</Link></li>
            </ul>
        )
    }
}

class App extends Component{
    
    render(){

        return(
            <div>
                <Nav/>
                //route匹配地址
                <Route exact path="/" component={Home}/>
                <Route  path="/drama" component={Drama}/>
                <Route  path="/movie" component={Movie}/>
            </div>
        )
    }
}



ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
)

```