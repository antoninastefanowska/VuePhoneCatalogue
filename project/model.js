class Phone 
{
    constructor()
    {
        this.id = -1;
        this.name = "";
        this.brandID = -1;
        this.releaseYear = 2015;
        this.releaseMonth = 6;
        this.typeID = -1;
        this.keyboard = false;
        this.sizeInch = 5;
        this.touchscreen = false;
        this.simID = -1;
        this.dualsim = false;
        this.memoryCardID = -1;
        this.memoryMB = 8192;
        this.ramMB = 2048;
        this.operatingSystemID = -1;
        this.operatingSystemVersion = 5;
        this.chipset = "";
        this.cpuGHz = 1.5;
        this.cores = 4;
        this.batterymAH = 3000;
        this.cameraMP = 12;
        this.cameraLED = false;
        this.radio = false;
        this.communicationIDs = [];
        this.sensorIDs = [];
    }

    get brand() 
    { 
        let brand = Database.instance.brands[this.brandID];
        if (brand)
            return brand;
        else
            return new Brand(); 
    }

    get type()
    {
        let type = Database.instance.types[this.typeID];
        if (type) 
            return type;
        else
            return new Type();
    }

    get sim() 
    {
        let sim = Database.instance.sims[this.simID];
        if (sim) 
            return sim;
        else
            return new Sim(); 
    }

    get memoryCard() 
    {
        let memoryCard = Database.instance.memoryCards[this.memoryCardID];
        if (memoryCard) 
            return memoryCard;
        else
            return new MemoryCard();
    }

    get operatingSystem() 
    {
        let operatingSystem = Database.instance.operatingSystems[this.operatingSystemID]; 
        if (operatingSystem)
            return operatingSystem;
        else
            return new OperatingSystem(); 
    }

    get communications()
    {
        var communications = [];
        for (let i = 0; i < this.communicationIDs.length; i++)
            communications.push(Database.instance.communications[this.communicationIDs[i]]);
        return communications;
    }

    get sensors()
    {
        var sensors = [];
        for (let i = 0; i < this.sensorIDs.length; i++)
            sensors.push(Database.instance.sensors[this.sensorIDs[i]]);
        return sensors;
    }

    static compareAttribute(phone1, phone2, attributeName)
    {
        if (attributeName === "sensors" || attributeName === "communications")
        {
            if (phone1[attributeName].length > phone2[attributeName].length)
                return 1;
            else if (phone1[attributeName].length < phone2[attributeName].length)
                return -1;
            else
                return 0;
        }
        else if (attributeName === "release")
        {
            if (phone1.releaseYear > phone2.releaseYear)
                return 1;
            else if (phone1.releaseYear < phone2.releaseYear)
                return -1;
            else
            {
                if (phone1.releaseMonth > phone2.releaseMonth)
                    return 1;
                else if (phone1.releaseMonth < phone2.releaseMonth)
                    return -1;
                else
                    return 0;
            }
        }
        else if (attributeName === 'operatingSystemVersion')
        {
            if (phone1.operatingSystemID === phone2.operatingSystemID)
            {
                if (phone1.operatingSystemVersion > phone2.operatingSystemVersion)
                    return 1;
                else if (phone1.operatingSystemVersion < phone2.operatingSystemVersion)
                    return -1;
                else
                    return 0;
            }
            else
                return 0;
        }
        else
        {
            if (phone1[attributeName] > phone2[attributeName])
                return 1;
            else if (phone1[attributeName] < phone2[attributeName])
                return -1;
            else
                return 0;
        }
    }
}

class Brand
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}

class Type
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}

class Sim
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}

class MemoryCard
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}

class OperatingSystem
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}

class Communication
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}

class Sensor
{
    constructor()
    {
        this.id = -1;
        this.name = "";
    }
}