class Data
{
    static get BASE_URL() { return 'http://localhost:3000'; }

    static get instance()
    {
        if (!this._instance)
            this._instance = new Data();
        return this._instance;
    }

    constructor()
    {
        this.phones = [];
        this.brands = [];
        this.types = [];
        this.sims = [];
        this.memoryCards = [];
        this.operatingSystems = [];
        this.communications = [];
        this.sensors = [];
        this.currentTemplate = "";
    }

    static arrayToClassInstances(array, prototype)
    {
        for (let i = 0; i < array.length; i++)
            array[i].__proto__ = prototype;
    }

    loadData()
    {
        axios.get(Data.BASE_URL + '/phones')
            .then(response => {
                this.phones = response.data;
                Data.arrayToClassInstances(this.phones, Phone.prototype);
            })
            .catch(error => { });
        axios.get(Data.BASE_URL + '/brands')
            .then(response => {
                this.brands = response.data;
                Data.arrayToClassInstances(this.brands, Brand.prototype);
            })
            .catch(error => { });
        axios.get(Data.BASE_URL + '/types')
            .then(response => {
                this.types = response.data;
                Data.arrayToClassInstances(this.types, Type.prototype);
            })
            .catch(error => { });
        axios.get(Data.BASE_URL + '/sims')
            .then(response => {
                this.sims = response.data;
                Data.arrayToClassInstances(this.sims, Sim.prototype);
            })
            .catch(error => { });
        axios.get(Data.BASE_URL + '/memoryCards')
            .then(response => {
                this.memoryCards = response.data;
                Data.arrayToClassInstances(this.memoryCards, MemoryCard.prototype);
            })
            .catch(error => { });
        axios.get(Data.BASE_URL + '/operatingSystems')
            .then(response => {
                this.operatingSystems = response.data;
                Data.arrayToClassInstances(this.operatingSystems, OperatingSystem.prototype);
            })
            .catch(error => { });
        axios.get(Data.BASE_URL + '/communications')
            .then(response => {
                this.communications = response.data;
                Data.arrayToClassInstances(this.communications, Communication.prototype);
            })
            .catch(error => { });
        axios.get(Data.BASE_URL + '/sensors')
            .then(response => {
                this.sensors = response.data;
                Data.arrayToClassInstances(this.sensors, Sensor.prototype);
            })
            .catch(error => { });
    }

    loadTemplate(route) 
    {
        switch (route)
        {
            case '/':
            case '/phones':
            axios.get('/phone_list.html')
                .then(response => {
                    this.currentTemplate = response.data;
                })
                .catch(error => { })
            break;
        }
    }
}