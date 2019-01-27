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
        /*
        let result = array.reduce(function(map, object) {
            map[object.id] = object;
            return map;
        }, {}); */
        let result = [];
        for (let i = 0; i < array.length; i++)
            result[array[i].id] = array[i];
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

        axios.post(Database.BASE_URL + '/phones', phone)
            .then(response => {
                let phone = response.data;
                Database.objectToClassInstance(phone, Phone.prototype);
                this.phones.push(phone);
            })
            .catch(error => { console.log(error); });
    }

    deletePhone(id)
    {
        axios.delete(Database.BASE_URL + '/phones/' + id)
            .then(() => {
                this.phones.splice(id);
            })
            .catch(error => { console.log(error); });
    }

    editPhone(phone)
    {
        axios.put(Database.BASE_URL + '/phones/' + phone.id, phone)
            .then((response) => {
                let phone = response.data;
                Database.objectToClassInstance(phone, Phone.prototype);
                this.phones[phone.id] = phone;
            })
            .catch(error => { console.log(error); });
    }

    static getClassPrototype(itemType)
    {
        switch (itemType)
        {
            case 'brands':
                return Brand.prototype;
            case 'types':
                return Type.prototype;
            case 'sims':
                return Sim.prototype;
            case 'memoryCards':
                return MemoryCard.prototype;
            case 'operatingSystem':
                return OperatingSystem.prototype;
            case 'communications':
                return Communication.prototype;
            case 'sensors':
                return Sensor.prototype;
        }
    }

    addItem(item, itemType)
    {
        item.id = this[itemType].length;

        axios.post(Database.BASE_URL + '/' + itemType, item)
            .then(response => {
                let item = response.data;
                Database.objectToClassInstance(item, Database.getClassPrototype(itemType));
                this[itemType].push(item);
            })
            .catch(error => { console.log(error); });
    }

    deleteItem(id, itemType)
    {
        axios.delete(Database.BASE_URL + '/' + itemType + '/' + id)
            .then(() => {
                this[itemType].splice(id);
            })
            .catch(error => { console.log(error); });
    }

    editItem(item, itemType)
    {
        axios.put(Database.BASE_URL + '/' + itemType + '/' + item.id, item)
            .then((response) => {
                let item = response.data;
                Database.objectToClassInstance(item, Database.getClassPrototype(itemType));
                this[itemType][item.id] = item;
            })
            .catch(error => { console.log(error); });
    }
}