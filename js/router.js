
//Class construtora (mesmo padrao)
export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
        
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname]
        console.log(pathname)
    
        fetch(route).then((data) => {
            return data.text()
        }).then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}

