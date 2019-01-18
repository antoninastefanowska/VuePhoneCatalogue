class Phone 
{
    constructor()
    {
        this.id = -1;
        this.name = "";
        this.brandID = -1;
        this.releaseYear = -1;
        this.releaseMonth = -1;
        this.typeID = -1;
        this.keyboard = false;
        this.sizeInch = -1;
        this.touchscreen = false;
        this.simID = -1;
        this.dualsim = false;
        this.memoryCardID = -1;
        this.memoryMB = -1;
        this.ramMB = -1;
        this.operatingSystemID = -1;
        this.operatingSystemVersion = -1;
        this.chipset = "";
        this.cpuGHz = -1;
        this.cores = -1;
        this.batterymAH = -1;
        this.cameraMP = -1;
        this.cameraLED = false;
        this.radio = false;
        this.communicationIDs = [];
        this.sensorIDs = [];
    }

    get brand() 
    { 
        let brand = Data.instance.brands[this.brandID];
        if (brand)
            return brand;
        else
            return new Brand(); 
    }

    get type()
    {
        let type = Data.instance.types[this.typeID];
        if (type) 
            return type;
        else
            return new Type();
    }

    get sim() 
    {
        let sim = Data.instance.sims[this.simID];
        if (sim) 
            return sim;
        else
            return new Sim(); 
    }

    get memoryCard() 
    {
        let memoryCard = Data.instance.memoryCards[this.memoryCardID];
        if (memoryCard) 
            return memoryCard;
        else
            return new MemoryCard();
    }

    get operatingSystem() 
    {
        let operatingSystem = Data.instance.operatingSystems[this.operatingSystemID]; 
        if (operatingSystem)
            return operatingSystem;
        else
            return new OperatingSystem(); 
    }

    get communications()
    {
        var communications = [];
        for (let i = 0; i < this.communicationIDs.length; i++)
            communications.push(Data.instance.communications[this.communicationIDs[i]]);
        return communications;
    }

    get sensors()
    {
        var sensors = [];
        for (let i = 0; i < this.sensorIDs.length; i++)
            sensors.push(Data.instance.sensors[this.sensorIDs[i]]);
        return sensors;
    }

    static compareAttribute(phone1, phone2, attributeName)
    {
        switch (attributeName)
        {
            // ...
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