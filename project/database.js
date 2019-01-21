class Database
{
    static get BASE_URL() { return 'http://localhost:3000'; }

    static get instance()
    {
        if (!this._instance)
            this._instance = new Database();
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
        this.loadData();
    }

    static objectToClassInstance(object, prototype)
    {
        object.__proto__ = prototype;
    }

    static arrayToClassInstances(array, prototype)
    {
        for (let i = 0; i < array.length; i++)
            array[i].__proto__ = prototype;
    }

    static arrayToDictionary(array)
    {
        let result = array.reduce(function(map, object) {
            map[object.id] = object;
            return map;
        }, {});
        array = result;
    }

    loadData()
    {
        axios.get(Database.BASE_URL + '/phones')
            .then(response => {
                this.phones = response.data;
                Database.arrayToClassInstances(this.phones, Phone.prototype);
                Database.arrayToDictionary(this.phones);
            })
            .catch(error => { });
        axios.get(Database.BASE_URL + '/brands')
            .then(response => {
                this.brands = response.data;
                Database.arrayToClassInstances(this.brands, Brand.prototype);
                Database.arrayToDictionary(this.phones);
            })
            .catch(error => { });
        axios.get(Database.BASE_URL + '/types')
            .then(response => {
                this.types = response.data;
                Database.arrayToClassInstances(this.types, Type.prototype);
                Database.arrayToDictionary(this.types);
            })
            .catch(error => { });
        axios.get(Database.BASE_URL + '/sims')
            .then(response => {
                this.sims = response.data;
                Database.arrayToClassInstances(this.sims, Sim.prototype);
                Database.arrayToDictionary(this.sims);
            })
            .catch(error => { });
        axios.get(Database.BASE_URL + '/memoryCards')
            .then(response => {
                this.memoryCards = response.data;
                Database.arrayToClassInstances(this.memoryCards, MemoryCard.prototype);
                Database.arrayToDictionary(this.memoryCards);
            })
            .catch(error => { });
        axios.get(Database.BASE_URL + '/operatingSystems')
            .then(response => {
                this.operatingSystems = response.data;
                Database.arrayToClassInstances(this.operatingSystems, OperatingSystem.prototype);
                Database.arrayToDictionary(this.operatingSystems);
            })
            .catch(error => { });
        axios.get(Database.BASE_URL + '/communications')
            .then(response => {
                this.communications = response.data;
                Database.arrayToClassInstances(this.communications, Communication.prototype);
                Database.arrayToDictionary(this.communications);
            })
            .catch(error => { });
        axios.get(Database.BASE_URL + '/sensors')
            .then(response => {
                this.sensors = response.data;
                Database.arrayToClassInstances(this.sensors, Sensor.prototype);
                Database.arrayToDictionary(this.sensors);
            })
            .catch(error => { console.log(error); });
    }

    addPhone(phone)
    {
        phone.id = this.phones.length;
        //let keys = Object.keys(this.phones);
        //phone.id = parseInt(keys[keys.length - 1]) + 1;
        //console.log(phone.id);

        axios.post(Database.BASE_URL + '/phones', phone)
            .then(response => {
                let phone = response.data;
                Database.objectToClassInstance(phone, Phone.prototype);
                this.phones[phone.id] = phone;
            })
            .catch(error => { console.log(error); });
    }
}