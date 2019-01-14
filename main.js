document.body.onload = main;
var data = Data.instance;
var phoneList;
var app;
var routes = {
    '/': phoneList,
    '/phones': phoneList
}

var vm = new Vue({
    el: "#app",
    data: data,
    computed: {
        ViewComponent() 
        {
            return this.currentTemplate;
        }
    },
    render(h) { return h(this.ViewComponent); }
});

function main() {
    app = document.getElementById('app');
    data.loadData();
    data.loadTemplate(window.location.pathname);
}

function loadRoutes()
{
    axios.get('/routes.json')
        .then(response => {
            console.log(response.data);
            routes = JSON.parse(response.data);
            console.log(routes);
        })
        .catch(error => { console.log(error); });
}

function loadTemplates()
{
    axios.get('/phone_list.html')
        .then(response => {
            phoneList = response.data;
            routes['/'] = phoneList;
            //console.log(phoneList);
        })
        .catch(error => { })
}